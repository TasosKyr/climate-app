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
            <p>Here you can do politics stuff</p>
          </div>
          <hr />
          <div className="twit-txt d-flex justify-content-between mb-5">
            <div className="twitter-container ml-3">
              <Twitter />
            </div>
            <div className="card politics-box mr-3">
              <h4> Access to Decision Makers</h4>
              <p>
                Here you will find members of the European Parliament, and the factions they belong to.
                You can engage with the decision makers who impact global climate change policy.
              </p>
              <p>
                The European Union is an important player in global climate politics. You will find the
                major EU climate initiatives and legislation by pressing the button below.
              </p>
              <a target="_blank" href="https://ec.europa.eu/clima/index_en">
                <button className="button1">Legislation</button>
              </a>
            </div>
            {/* <div style={{ height: "10px", margin: "5rem" }} /> */}
            <br />
          </div>
          <Groups />
        </div>
      </>
    )
  }
}

export default Politics
