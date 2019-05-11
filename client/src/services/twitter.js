import axios from "axios"

const service = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
})

const getTweets = () => {
  console.log("hello from api/twitter")
  return service.get("/politics").then(response => response.data)
}

export { getTweets }
