import axios from "axios"

const backEndPort = process.env.BACKEND_PORT || "5000"

const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true
})

const signup = (username, password, imgPath) => {
  return service.post("/signup", { username, password, imgPath }).then(response => response.data)
}

const login = (username, password) => {
  return service.post("/login", { username, password }).then(response => response.data)
}

const logout = () => {
  return service.post("/logout").then(response => response.data)
}

const loggedin = () => {
  return service.get("/loggedin").then(response => response.data)
}

const upload = data => {
  return service.post("/upload", data).then(response => response.data)
}

export { signup, login, logout, loggedin, upload }
