import React, { Component } from "react"
import Twitter from "./Twitter"
import PoliticsHeader from "./PoliticsHeader"
import EUOpenData from "./EUOpenData"
import MEPs from "./MEPs"

class Politics extends Component {
  render() {
    return (
      <div>
        <PoliticsHeader />
        <Twitter />
        <EUOpenData />
        <MEPs />
      </div>
    )
  }
}

export default Politics
