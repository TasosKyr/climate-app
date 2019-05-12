import axios from "axios"

const service = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
})

const getTweets = () => {
  return service.get("/politics").then(response => response.data)
}

export { getTweets }
