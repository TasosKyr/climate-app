import React from "react"
import { Link } from "react-router-dom"
import { logout } from "../services/auth"

class Navbar extends React.Component {
  state = {
    loggedIn: this.props.loggedin
  }

  componentDidUpdate(prevProps) {
    if (this.props.loggedIn !== prevProps.loggedIn) {
      this.setState({ loggedIn: this.props.loggedIn })
    }
  }

  handleLogout = () => {
    logout().then(() => {
      this.setState({ loggedIn: null })
      this.props.setUser(null)
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light navbar-main">
        {this.state.loggedIn ? (
          <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-link nav-color">Welcome {this.state.loggedIn.username} !</li>
                <li className="nav-item active">
                  <Link className="nav-link nav-color" to="/politics">
                    Politics <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-color" to="/action">
                    Action
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-color" to="/data">
                    Data
                  </Link>
                </li>
                <li className="nav-item" onClick={this.handleLogout}>
                  <Link className="nav-link nav-color" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link className="navbar-brand nav-color" to="/">
              LOGO
            </Link>
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
                  <Link className="nav-link nav-color" to="/politics">
                    Politics <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-color" to="/action">
                    Action
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-color" to="/data">
                    Data
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-color" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-color" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    )
  }
}

export default Navbar
