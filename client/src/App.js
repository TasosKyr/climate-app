import React from "react"

import Home from "./components/Home/Home"
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import { loggedin } from "./services/auth";
import Events from "./components/Action/Events"
import Footer from "./components/Footer"

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile"

import { Switch, Route, Redirect } from "react-router-dom";
import Action from './components/Action/Action'


import "./App.css"
import "./customBootstrap.scss"

class App extends React.Component {
  state = { loggedIn: null }

  setUser = user => {
    this.setState({
      loggedIn: user
    });
  };

  getUser = () => {
    loggedin().then(user => {
      this.setState({
        loggedIn: user
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="App">
 
        <Navbar setUser={this.setUser} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => <Signup setUser={this.setUser} {...props} />}
          />

          <Route
            exact
            path="/login"
            render={(props) => <Login
              setUser={this.setUser}
              {...props} />}
          />
          {/* <Route
            exact
            path="/profile"
            render={props => (
              <Profile {...props} user={this.state.loggedIn} />
            )}
          /> */}
          <ProtectedRoute
            user={this.state.loggedIn}
            component={Profile}
            exact={true}
            path="/profile"
          />
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/politics" component={Politics} /> */}
          {/* <Route path="/action" component={Action} /> */}
          {/* <Route path="/data" component={Data} /> */}
          {/* <Events /> */}
        </Switch>

        <Navbar />
        {/* <Switch> */}
        <Route path="/" component={Home} />
        {/* <Route path="/politics" component={Politics} /> */}
        <Route path="/action" component={Action} />
        {/* <Route path="/data" component={Data} /> */}

        {/* <Events /> */}
        {/* </Switch> */}
        <Footer />
      </div>
        {/* </Switch> */}

        {/* <Footer /> */}
      </div >
    )
  }
}

export default App
