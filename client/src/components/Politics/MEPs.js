import React, { Component } from "react"
import { Link } from "react-router-dom"
import Plx from "react-plx"
import { getParty } from "../../services/politics"
import { get as _get } from "lodash"

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
    console.log(data)
    return (
      <>
        <div className="header-container-politics" />
        <h2>Party name</h2>
        <div style={{ marginBottom: "6rem" }}>
          {data &&
            data.map(el => (
              <Plx parallaxData={parallaxDataLeft}>
                <div className="shaded-box">
                  <Link to={`/politics/${this.props.match.params.partyID}/${el.UserID}`}>
                    {el.Name.full}
                  </Link>
                </div>
              </Plx>
            ))}
        </div>
      </>
    )
  }
}

export default MEPs
