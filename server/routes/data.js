const express = require('express');
const router = express.Router();
const axios = require('axios')
/* const Incident = require('../models/Incident') */

const cities = { 'New York': 1, 'Los Angeles': 2, 'Chicago': 3, 'Phoenix': 9, 'San Antonio': 11, 'San Diego': 12, 'Dallas': 13, 'San Francisco': 17, 'Austin': 18, }

const extremeIncident = (city, type, years) => {
  const BASE_URL = `https://app.climate.azavea.com/api/climate-data/`
  /* city = `3` */
  const scenario = `RCP85`
  /* type = "heat_wave_incidents" */
  const params = `/indicator/${type}/?years=`
  /* years = `2010:2018` */
  const url = `${BASE_URL}${city}/${scenario}${params}${years}`
  const token = `6b9758fc6eb5d9dc8a226dcadecf701ce8ca78e9`

  return axios
    .get(url, { headers: { Authorization: `Token ${token}` } })
    .then(response => {
      const { data } = response
      return data
    })
    .catch(err => {
      console.error(err)
    })
}

router.post('/data', async (req, res, next) => {
  const { city, type, years } = req.body
  const incident = await extremeIncident(city, type, years);
  res.json(incident);
});

router.get('/data', async (req, res, next) => {
  res.json({ message: "you're in the wrong route... I think" })
});

module.exports = router;