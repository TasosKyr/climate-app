import React, { Component } from "react"
import { Link } from "react-router-dom"
import Plx from "react-plx"

class Groups extends Component {
  render() {
    const parallaxDataLeft = [
      {
        start: "self",
        end: "self",
        endOffset: "30vh",

        properties: [
          {
            startValue: 0,
            endValue: 1,
            property: "opacity"
          },
          {
            startValue: 200,
            endValue: 0,
            property: "translateX"
          }
        ]
      }
    ]
    return (
      <div className="groups-container">
        <div className="party-container" style={{ marginBottom: "6rem" }}>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/PPE`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/1_EPP_EP_group_logo_2015.png" alt="EPP Logo" />
                </div>
                <div className="party-name">
                  <p> European People's Party </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>

          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/S&D`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/2_File_S&D.png" alt="S&D Logo" />
                </div>
                <div className="party-name">
                  <p> Progressive Alliance of Socialists and Democrats </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>

          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/ECR`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img
                    src="../../../logos/3_European_Conservatives_and_Reformists_logo.png"
                    alt="ECR Logo"
                  />
                </div>
                <div className="party-name">
                  <p> European Conservatives and Reformists </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/ALDE`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/4_380px-ALDE_logo.svg.png" alt="ALDE Logo" />
                </div>
                <div className="party-name">
                  <p> Alliance of Liberals and Democrats for Europe </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/GUENGL`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/5_246px-GUE-NGL_logo.svg.png" alt="GUE-NGL Logo" />
                </div>
                <div className="party-name">
                  <p> European United Left–Nordic Green Left </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/VALE`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/6_Logo_greens-efa.png" alt="Greens–EFA Logo" />
                </div>
                <div className="party-name">
                  <p> Greens–European Free Alliance </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/EFDD`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/7_EFDD_group_logo.png" alt="EFDD Logo" />
                </div>
                <div className="party-name">
                  <p> Europe of Freedom and Direct Democracy </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/ENF`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/8_Europe_of_Nations_and_Freedom_logo.png" alt="ENF Logo" />
                </div>
                <div className="party-name">
                  <p> Europe of Nations and Freedom </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
          <Plx parallaxData={parallaxDataLeft}>
            <Link to={`/politics/NA`}>
              <div className="shaded-box">
                <div className="party-logo">
                  <img src="../../../logos/9_eu_flag_logo.png" alt="Placeholder" />
                </div>
                <div className="party-name">
                  <p> Non-Attached Members </p>
                </div>
              </div>
            </Link>
            <hr />
          </Plx>
        </div>
      </div>
    )
  }
}

export default Groups
