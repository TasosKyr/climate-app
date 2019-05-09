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


/* GET event page, axios return promise so using async-await so that function on row 25 is not called before data is returned from axios call */
router.get('/action', async (req, res, next) => {
  const eventsBerlin = await upcomingEvents();
  res.json(eventsBerlin);
});

module.exports = router;