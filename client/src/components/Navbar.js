import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
  state = {}
  render() {
    return (
      <nav className="nav-bar">
        <Link to="/politics" style={{}}>
          Politics
        </Link>
        <Link to="/action" style={{}}>
          Action
        </Link>
        <Link to="/data" style={{}}>
          Data
        </Link>
        <Link to="/signup" style={{}}>
          Signup
        </Link>
        <Link to="/login" style={{}}>
          Login
        </Link>
      </nav>
    )
  }
}

export default Navbar
