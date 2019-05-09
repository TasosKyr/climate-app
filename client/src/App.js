import React from "react"
import Navbar from "./components/Navbar"
import Events from "./components/Action/Events"

import "./App.css"

class App extends React.Component {
  state = {}

  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Switch> */}
        {/* <Route path="/" component={Home} /> */}
        {/* <Route path="/politics" component={Politics} /> */}
        {/* <Route path="/action" component={Action} /> */}
        {/* <Route path="/data" component={Data} /> */}
        <Events />
        {/* </Switch> */}
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App
