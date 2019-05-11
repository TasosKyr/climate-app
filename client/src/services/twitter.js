import axios from "axios"

const service = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
})

const getTweets = () => {
  console.log("hello from api")
  return service.get("politics").then(response => {
    console.log(response.data)
    response.data
  })
}

export { getTweets }
