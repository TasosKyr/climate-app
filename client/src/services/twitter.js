import axios from "axios"

const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL + "/api",
  withCredentials: true
})

const getTweets = () => {
  return service.get("/politics").then(response => response.data)
}

export { getTweets }
