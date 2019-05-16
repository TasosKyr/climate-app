const mongoose = require("mongoose")
const Schema = mongoose.Schema

const myCollectionSchema = new Schema({
  events: { type: Array, default: [] },
  petitions: { type: Array, default: [] },
  politics: { type: Array, default: [] }
})

const userSchema = new Schema(
  {
    username: String,
    password: String,
    imgPath: String,
    myCollection: { type: myCollectionSchema, default: {} },
  },
  {
    timestamps: true
  }
)

const User = mongoose.model("User", userSchema)

module.exports = User
