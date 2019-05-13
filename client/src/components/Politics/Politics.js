
import React, { Component } from "react"
import Twitter from "./Twitter"
import PoliticsHeader from './PoliticsHeader'

class Politics extends Component {
  render() {
    return (
      <>
        <PoliticsHeader />
        <div className="container page-container">

          <Twitter />


        </div>
      </>
    )
  }
}

export default Politics
