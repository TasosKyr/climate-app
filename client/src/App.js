import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home/Home"
import Events from "./components/Action/Events"
import Footer from "./components/Footer"

import "./App.css"
import "./customBootstrap.scss"

class App extends React.Component {
  state = {}

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Switch> */}
        <Route path="/" component={Home} />
        {/* <Route path="/politics" component={Politics} /> */}
        {/* <Route path="/action" component={Action} /> */}
        {/* <Route path="/data" component={Data} /> */}
        {/* <Events /> */}
        {/* </Switch> */}
        <Footer />
      </div>
    )
  }
}

export default App
