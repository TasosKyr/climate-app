const mongoose = require("mongoose")
const Schema = mongoose.Schema

const twitterSchema = new Schema({
  created_at: String,
  id_str: String,
  text: String,
  user: {
    id: Number,
    name: String,
    screen_name: String
  }
})

const Twitter = mongoose.model("Twitter", twitterSchema)

module.exports = Twitter
