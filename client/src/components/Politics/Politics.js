import React, { Component } from "react"
import Twitter from "./Twitter"
import EUOpenData from "./EUOpenData"
import MEPs from "./MEPs"

class Politics extends Component {
  render() {
    return (
      <>
        <div className="container page-container">
          <h1>Climate Politics</h1>

          <div>
            <Twitter />
            <EUOpenData />
            <MEPs />
          </div>
        </div>
      </>
    )
  }
}

export default Politics
