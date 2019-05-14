import React, { Component } from "react"
import Twitter from "./Twitter"
import EUOpenData from "./EUOpenData"
import Groups from "./Groups"
import MEPs from "./MEPs"

class Politics extends Component {
  render() {
    return (
      <>
        <div className="header-container-politics" />
        <h1>Climate Politics</h1>

        <div>
          {/* <Twitter />
            <EUOpenData /> */}
          <Groups />
          <MEPs />
        </div>
      </>
    )
  }
}

export default Politics
