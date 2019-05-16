import React, { Component } from "react"
import { Link } from "react-router-dom"
import Plx from "react-plx"
import { getParty } from "../../services/politics"
import { get as _get } from "lodash"
import PageHeader from "../PageHeader"
import image2 from "../../images/euro-flag.jpeg"

class MEPs extends Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    getParty(this.props.match.params.partyID).then(data => {
      this.setState({ data: data })
    })
  }

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
    const { data } = this.state
    console.log(_get(data, "[0].Groups[0].Organization"))

    return (
      <>
        <PageHeader image={image2} />
        <div id="content" className="container page-container">
          <div className="intro-text-container">
            <h1>{_get(data, "[0].Groups[0].Organization")}</h1>
            <p>Select an MEP to engage with them directly</p>
          </div>
          <hr />

          <div />
          <h2 />
          <div style={{ marginBottom: "6rem" }}>
            {data &&
              data.map(el => (
                <Plx parallaxData={parallaxDataLeft}>
                  <div className="shaded-box-member">
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/politics/${this.props.match.params.partyID}/${el.UserID}`}
                    >
                      {el.Name.full}
                      <hr />
                    </Link>
                  </div>
                </Plx>
              ))}
          </div>
        </div>
      </>
    )
  }
}

export default MEPs
