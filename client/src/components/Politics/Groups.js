import React, { Component } from "react"
import { Link } from "react-router-dom"

class Groups extends Component {
  render() {
    return (
      <div className="groups-container">
        <div className="party-container">
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/1_EPP_EP_group_logo_2015.png" alt="EPP Logo" />
              {/* ${party.id} */}
              <h3 className="test"> European People's Party </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/2_File_S&D.png" alt="S&D Logo" />
              <h3> Progressive Alliance of Socialists and Democrats </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img
                src="../../../logos/3_European_Conservatives_and_Reformists_logo.png"
                alt="ECR Logo"
              />
              <h3> European Conservatives and Reformists </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/4_380px-ALDE_logo.svg.png" alt="ALDE Logo" />
              <h3> Alliance of Liberals and Democrats for Europe </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/5_246px-GUE-NGL_logo.svg.png" alt="GUE-NGL Logo" />
              <h3> European United Left–Nordic Green Left </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/6_Logo_greens-efa.png" alt="Greens–EFA Logo" />
              <h3> Greens–European Free Alliance </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/7_EFDD_group_logo.png" alt="EFDD Logo" />
              <h3> Europe of Freedom and Direct Democracy </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/8_Europe_of_Nations_and_Freedom_logo.png" alt="ENF Logo" />
              <h3> Europe of Nations and Freedom </h3>
            </div>
          </Link>
          <Link to={`/politics/`}>
            <div className="shaded-box">
              <img src="../../../logos/logo.png" alt="Placeholder" />
              <h3> Non-Inscrits </h3>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Groups
