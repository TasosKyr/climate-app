const express = require('express');
const router = express.Router();
const axios = require('axios')
/* const Incident = require('../models/Incident') */

const extremeIncident = () => {
  const BASE_URL = `https://app.climate.azavea.com/api/climate-data/`
  const city = `1`
  const scenario = `RCP85`
  const params = `/indicator/heat_wave_incidents/?years=`
  const years = `2012:2018`
  const url = `${BASE_URL}${city}/${scenario}${params}${years}`

  return axios
    .get(url, { headers: { Authorization: "Token 6b9758fc6eb5d9dc8a226dcadecf701ce8ca78e9" } })
    .then(response => {
      const { data } = response
      return data
    })
    .catch(err => {
      console.error(err)
    })
}

router.get('/data', async (req, res, next) => {
  const incident = await extremeIncident();
  res.json(incident);
});

module.exports = router;