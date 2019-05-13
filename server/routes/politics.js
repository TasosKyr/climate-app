const express = require("express")
const router = express.Router()
const Twitter = require("twit")
const CKAN = require("ckan")

router.get("/politics", (req, res) => {
  let client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })

  client
    .get("search/tweets", { q: "climatechange" })
    .then(response => {
      res.json(response.data)
    })
    .catch(err => console.error(err))
})

//   client.get("search/tweets", { q: "climatechange" }).then(responseOne => {
//     client
//       .get("search/tweets", { q: "globalwarming" })
//       .then(responseTwo => {
//         const response = {
//           ...responseOne,
//           ...responseTwo
//         }
//         res.json(response.data)
//         console.log(response.data)
//       })
//       .catch(err => console.error(err))
//   })
// })

//CKAN
// let client = new CKAN.Client("http://data.europa.eu/euodp/data/api/3/action/package_list")

// You can also provide an API key (for operations that require one)
// let client = new CKAN.Client("http://data.europa.eu/euodp/data/api/3/action/package_list", "my-api-key")

// If your portal disallows POST requests (note: limited support in browser module)
// client.requestType = "GET"

module.exports = router
