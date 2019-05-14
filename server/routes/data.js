const express = require("express")
const router = express.Router()
const axios = require("axios")

const extremeIncident = (city, type, years) => {
  const BASE_URL = `https://app.climate.azavea.com/api/climate-data/`
  const scenario = `RCP85`
  const params = `/indicator/${type}/?years=`
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

router.post("/data", async (req, res, next) => {
  const { city, type, years } = req.body
  const incident = await extremeIncident(city, type, years)
  res.json(incident)
  // console.log('Here is the incident', incident)
})

router.get("/data", async (req, res, next) => {
  res.json({ message: "you're in the wrong route... I think" })
})

module.exports = router
