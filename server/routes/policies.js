const express = require("express")
const router = express.Router()
const axios = require("axios")
const mepJSON = require("../public/data/parltrack-data.json")

// EU Open Data Portal API
const getClimatePolices = () => {
  const BASE_URL =
    "http://data.europa.eu/euodp/data/api/3/action/package_show?id=data_climate-change-mitigation-policies-and-measures-1"

  return axios
    .get(BASE_URL)
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.error(err)
    })
}

router.get("/politics/policies", async (req, res) => {
  const climatePolicies = await getClimatePolices()
  return res.json(climatePolicies)
})

// MEPs
router.get("/politics/meps", (req, res) => {
  res.json(mepJSON)
})

module.exports = router

// data_climate-change-mitigation-policies-and-measures-3
