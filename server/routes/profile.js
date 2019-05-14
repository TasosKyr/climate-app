const express = require("express")
const router = express.Router()
const User = require("../models/User")
const mongoose = require('mongoose')
const Event = require('../models/Event')
const Petition = require('../models/Petition')


const getEvents = function (myCollection) {
  const eventIds = myCollection.events
  const objectIds = eventIds.map(id => {
    if (id) return mongoose.Types.ObjectId(id)
  })
  const query = Event.where('_id').in(objectIds)
  return query
}

const getPetitions = function (myCollection) {
  const petitionIds = myCollection.petitions
  const objectIds = petitionIds.map(id => {
    if (id) return mongoose.Types.ObjectId(id)
  })
  const query = Petition.where('_id').in(objectIds)
  return query
}

router.get("/profile", (req, res) => {
  if (!req.user || !req.user.myCollection) return res.json({ events: [] })
  console.log('!req.user', !req.user)
  console.log('req.user', req.user)
  const queryEvents = getEvents(req.user.myCollection);
  const queryPetitions = getPetitions(req.user.myCollection)
  Promise.all([queryEvents, queryPetitions])
    .then(([events]) => {
      res.json({ events })
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

