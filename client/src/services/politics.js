import axios from "axios"

const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + "/api",
  withCredentials: true
})

const getTweets = () => {
  return service.get("/politics/twit").then(response => response.data)
}

const getPolicies = () => {
  return service.get("/politics/policies").then(response => response.data)
}

const getParty = partyID => {
  return service.get(`/politics/party/${partyID}`).then(response => response.data)
}

const getMEP = mepID => {
  return service.get(`/politics/mep/${mepID}`).then(response => response.data)
}

export { getTweets, getPolicies, getMEP, getParty }
