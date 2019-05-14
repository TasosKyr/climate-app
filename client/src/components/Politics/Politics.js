import React, { Component } from "react"
import Twitter from "./Twitter"
import EUOpenData from "./EUOpenData"
import MEPs from "./MEPs"

class Politics extends Component {
  render() {
    return (
      <div>
        <Twitter />
        <EUOpenData />
        <MEPs />
      </div>
    )
  }
}

export default Politics
