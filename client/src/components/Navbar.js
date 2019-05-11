import React from "react"
import { NavLink } from "react-router-dom"

class Navbar extends React.Component {
  state = {}
  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-light navbar-main">
        <NavLink className="navbar-brand nav-color" to="/">
          ClimAct
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link nav-color" to="/politics">
                Politics <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-color" to="/action">
                Action
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-color" to="/data">
                Data
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-color" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-color" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
