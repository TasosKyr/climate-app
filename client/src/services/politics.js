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

const getJSON = () => {
  return service.get("/politics/meps").then(response => response.data)
}

export { getTweets, getPolicies, getJSON }
