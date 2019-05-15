require("dotenv").config()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const express = require("express")
const favicon = require("serve-favicon")
const hbs = require("hbs")
const mongoose = require("mongoose")
const logger = require("morgan")
const path = require("path")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")
var CronJob = require('cron').CronJob;
const { scrapeChangeOrg } = require('./routes/scraping')
const Petition = require('./models/Petition')

const scraping = async () => {
  const petitions = await scrapeChangeOrg()
  await Promise.all(
    petitions.map(element => {
      return Petition.findOneAndUpdate({ url: element.url }, element, { upsert: true, new: true })
    })
  );
}

new CronJob('0 30 * * * *', scraping
  , null, true, 'Europe/Berlin');
scraping();

require("./configs/passport")

const mongoDBURL =
  process.env.NODE_ENV === "DEV" ? process.env.MONGODB_DEV_URL : process.env.MONGODB_PROD_URL

mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })

const app_name = require("./package.json").name
const debug = require("debug")(`${app_name}:${path.basename(__filename).split(".")[0]}`)

const app = express()

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
)

// Middleware Setup
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "public")))
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")))

app.use(
  session({
    secret: "this is a secret key",
    resave: true,
    saveUninitialized: true
  })
)

app.use(passport.initialize())
app.use(passport.session())

// default value for title local
app.locals.title = "Express - Generated with IronGenerator"

const index = require("./routes/index")
app.use("/", index)

const auth = require("./routes/auth/auth")
app.use("/api", auth)

const data = require("./routes/data")
app.use("/", data)

const events = require("./routes/events")
app.use("/", events)

const upload = require("./routes/upload")
app.use("/api", upload)

const twit = require("./routes/twit")
app.use("/api", twit)

const policies = require("./routes/policies")
app.use("/api", policies)

const petitions = require("./routes/petitions")
app.use("/", petitions)

const profile = require("./routes/profile")
app.use("/", profile)

app.use((req, res, next) => {
  res.sendFile(__dirname + "/public/index.html")
})

module.exports = app
