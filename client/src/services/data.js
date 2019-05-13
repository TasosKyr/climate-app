import axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true
});


const getData = body => {
  return service
    .post("/data", body)
    .then(response => response.data)
    .catch("you got an error, check your api");
}

export { getData };