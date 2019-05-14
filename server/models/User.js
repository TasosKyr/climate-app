const mongoose = require("mongoose")
const Schema = mongoose.Schema

const myCollectionSchema = new Schema({
  events: Array,
  petitions: Array,
  politics: Array
})

const userSchema = new Schema(
  {
    username: String,
    password: String,
    imgPath: String,
    myCollection: myCollectionSchema,
  },
  {
    timestamps: true
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
