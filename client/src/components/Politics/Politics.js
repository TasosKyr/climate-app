import React, { Component } from "react"
import Twitter from "./Twitter"
import EUOpenData from "./EUOpenData"
import Groups from "./Groups"
import MEPs from "./MEPs"
import PageHeader from "../PageHeader"
import image2 from "../../images/euro-flag.jpeg"

class Politics extends Component {
  render() {
    return (
      <>
        <PageHeader image={image2} />
        <div className="header-politics" />
        <h1>Climate Politics</h1>

        <div>
          <Twitter />
          {/* <EUOpenData /> */}
          <Groups />
        </div>
      </>
    )
  }
}

export default Politics
