import React from "react"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar"
import Signup from "./components/Auth/Signup"
import Login from "./components/Auth/Login"
import { loggedin } from "./services/auth"
import Footer from "./components/Footer"
import Data from "./components/Data/Data"
import Politics from "./components/Politics/Politics"
import MEPs from "./components/Politics/MEPs"
import Member from "./components/Politics/Member"
import ProtectedRoute from "./components/ProtectedRoute"
import Profile from "./components/Profile/Profile"
import { Switch, Route } from "react-router-dom"
import Action from "./components/Action/Action"
import About from './components/About'

import "./App.css"
import "./customBootstrap.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faStar, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
library.add(faChevronDown, faStar, faTrashAlt)

class App extends React.Component {
  state = { loggedIn: null }

  setUser = user => {
    this.setState({
      loggedIn: user
    })
  }

  getUser = () => {
    loggedin().then(user => {
      this.setState({
        loggedIn: user
      })
    })
  }

  componentDidMount() {
    this.getUser()
  }

  render() {
    console.log(this.state.loggedIn)
    return (
      <div className="App">
        <Navbar setUser={this.setUser} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/about" component={About} />} />
          <Route exact path="/signup" render={props => <Signup setUser={this.setUser} {...props} />} />
          <Route exact path="/login" render={props => <Login setUser={this.setUser} {...props} />} />
          <Route exact path="/politics" component={Politics} />} />
          <Route exact path="/politics/:partyID" render={props => <MEPs {...props} />} />
          <Route exact path="/politics/:partyID/:mepID" render={props => <Member {...props} />} />
          <Route path="/data" component={Data} />
          <Route path="/" exact component={Home} />
          <Route
            exact
            path="/action"
            render={props => <Action {...props} user={this.state.loggedIn} />}
          />
          <ProtectedRoute user={this.state.loggedIn} component={Profile} exact={true} path="/profile" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
