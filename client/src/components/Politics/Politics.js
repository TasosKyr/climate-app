import React, { Component } from "react"
import { Link } from "react-router-dom"
import Twitter from "./Twitter"
import Groups from "./Groups"
import PageHeader from "../PageHeader"
import image2 from "../../images/euro-flag.jpeg"
// import EUOpenData from "./EUOpenData"

class Politics extends Component {
  render() {
    return (
      <>
        <PageHeader image={image2} />
        <div id="content" className="container page-container">
          <div className="intro-text-container">
            <h1>Climate Politics</h1>
            <p>Engage with the Decision Makers</p>
          </div>
          <hr />
          <div className="twit-txt d-flex justify-content-between mb-5">
            <div className="twitter-container ml-3">
              <Twitter />
            </div>
            <div className="card politics-box mr-3" style={{ padding: "0.5rem" }}>
              <h4> Access to your Rep</h4>
              <p>
                This page contains members of the European Parliament, and the factions they belong to.
                Engage directly with the decision makers who impact global climate change policy.
              </p>
              <p>
                The European Union is an important player in global climate politics. You will get an
                overview of EU climate initiatives and legislation by pressing the button below.
              </p>
              <a target="_blank" href="https://ec.europa.eu/clima/index_en">
                <button className="button1">Legislation</button>
              </a>
            </div>
            <br />
          </div>
          <Groups />
        </div>
      </>
    )
  }
}

export default Politics
