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

// Parties
router.get("/politics/party/:partyID", (req, res) => {
  let match = undefined
  if (req.params.partyID === "GUENGL") {
    match = "GUE/NGL"
  } else if (req.params.partyID === "VALE") {
    match = "Verts/ALE"
  } else match = req.params.partyID

  res.json(mepJSON.meps.filter(el => el.Groups[0].groupid === match))
})

//MEPs
router.get("/politics/mep/:mepID", (req, res) => {
  res.json(mepJSON.meps.find(el => el.UserID === Number(req.params.mepID)))
})

module.exports = router
