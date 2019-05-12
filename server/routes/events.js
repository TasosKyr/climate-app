const express = require('express');
const router = express.Router();
const axios = require('axios')
const Event = require('../models/Event')


const upcomingEvents = () => {
  const BASE_URL = `https://api.meetup.com/find/upcoming_events?`
  const params = `key=${process.env.MEETUP_SECRET_KEY}&sign=true&text=climate&excluded_groups=6535162`
  const url = `${BASE_URL}${params}`

  return axios
    .get(url)
    .then(response => {
      const { data } = response
      return data
    })
    .catch(err => {
      console.error(err)
    })
}

/* GET event page, axios return promise so using async-await so that the function is not called before data is returned from axios call */
router.get('/events', async (req, res, next) => {
  const eventsBerlin = await upcomingEvents();

  const eventCreationPromises =
    eventsBerlin.events.map(event => {
      const eventObject = {
        id: event.id,
        name: event.name,
        link: event.link,
        local_date: event.local_date,
        local_time: event.local_time,
        city: event.venue && event.venue.city,
        address: event.venue && event.venue.address_1,
        description: event.description,
        venue: event.venue && event.venue.name
      }
      return Event.findOneAndUpdate({ id: event.id }, eventObject, { upsert: true, new: true })
    })
  await Promise.all(eventCreationPromises)
  const allEventsInDB = await Event.find({})

  res.json(allEventsInDB);
});

const authenticationCheck = (req, res, next) => {
  console.log('is this working,no?')
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).end()
  }
};

router.post('/events', authenticationCheck, async (req, res, next) => {
  const newEvent = await Event.create(req.body)
  res.json(newEvent)
})




module.exports = router;