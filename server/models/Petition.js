const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petitionSchema = new Schema(
  {
    title: String,
    url: String,
  },
  {
    timestamps: true
  }
);

const Petition = mongoose.model("Petition", petitionSchema);

module.exports = Petition;