const express = require("express")
const router = express.Router()
const Twitter = require("twit")

router.get("/politics", (req, res) => {
  console.log("hello from poli")
  let client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })

  client
    .get("search/tweets", { q: "climatechange" })
    .then(response => {
      // console.log(response.data)
      res.json(response.data)
    })
    .catch(err => console.log("Something went wrong!", err))
})

module.exports = router
