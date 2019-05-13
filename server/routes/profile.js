const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/profile", (req, res) => {
  User.findOne(req.user.id)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.json(error)
    })
})

router.put("/profile", (req, res) => {
  User.findByIdAndUpdate(req.user.id, req.body)
    .then(() => {
      res.json({ message: "ok" })
    })
    .catch(error => {
      res.json(error)
    })
})

router.delete("/profile", (req, res) => {
  User.findByIdAndDelete(req.user.id)
    .then(() => {
      res.json({ message: "ok" })
    })
    .catch(error => {
      res.json(error)
    })
})



module.exports = router;

