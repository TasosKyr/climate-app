import React from "react"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../services/auth"
import { Dropdown } from 'react-bootstrap'


class Navbar extends React.Component {
  state = {
    loggedIn: this.props.loggedIn
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

  logo = (<Link className="navbar-brand nav-color logoFont" to="/" > ClimAct</Link>)

  subPages = (
    <>
      <li className="nav-item">
        <Link className="nav-link nav-color" to="/about">
          About
      </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link nav-color" to="/politics">
          Politics
      </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link nav-color" to="/action">
          Action </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link nav-color" to="/data">
          Data </Link>
      </li>
    </>)

  signupLogin = (<> <li className="nav-item">
    <Link className="nav-link nav-color" to="/signup">
      Signup
</Link>
  </li>
    <li className="nav-item">
      <Link className="nav-link nav-color" to="/login">
        Login
</Link>
    </li> </>)


  welcomeUser = () => (
    <>
      <Dropdown>
        <Dropdown.Toggle className='' variant="link" id="dropdown-basic" style={{ color: 'white', textDecoration: 'none' }}>
          Hi {this.state.loggedIn && this.state.loggedIn.username}!
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item style={{ backgroundColor: '#0d1313' }}><Link to="/profile">My Profile </Link> </Dropdown.Item>
          <Dropdown.Item style={{ backgroundColor: '#0d1313', color: 'white' }} onClick={this.handleLogout} >Log Out</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>;

    </>
  )

  navBarLoggedIn = () => (
    <>
      {this.logo}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          {this.subPages}

          {this.welcomeUser()}

        </ul>
      </div>
    </>)

  navBarLoggedOut = (
    <>
      {this.logo}
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


          {this.subPages}
          {this.signupLogin}

        </ul>
      </div>
    </>)


  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark navbar-main">
        {this.state.loggedIn ? (

          this.navBarLoggedIn()
        ) : (

            this.navBarLoggedOut

          )}

      </nav>
    )
  }
}

export default Navbar
