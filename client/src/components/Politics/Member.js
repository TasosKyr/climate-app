import React, { Component } from "react"
import { get as _get } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { getMEP } from "../../services/politics"
import parlBg from "../../images/EU-parl.jpg"

library.add(faTwitter, faEnvelope)

class Member extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    getMEP(this.props.match.params.mepID).then(data => {
      this.setState({ data: data })
    })
  }

  render() {
    const { data } = this.state
    return (
      <>
        <div
          className="page-header"
          data-parallax="true"
          style={{
            backgroundImage: `url(
              ${parlBg}
            )`,
            height: "70vh"
          }}
        />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img src={data.Photo} alt="Circle Image" className="img-raised img-fluid mt-3" />
                    </div>
                    <div className="name">
                      <h3 className="title" style={{ fontFamily: "Work Sans" }}>
                        {_get(data, "Name.full")}
                      </h3>

                      <h6 style={{ fontFamily: "Work Sans" }}>{_get(data, "Groups[0].Organization")}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p style={{ fontFamily: "Work Sans" }}>
                  {_get(data, "Addresses.Postal", []).map(el => (
                    <li style={{ listStyle: "none" }}>{el}</li>
                  ))}
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile-tabs">
                    <h4>Contact your representative:</h4>
                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a
                          style={{ fontFamily: "Work Sans" }}
                          className="nav-link"
                          href={"mailto:" + _get(data, "Mail[0]")}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "envelope"]}
                            style={{ color: "#000000", fontSize: "3rem", margin: "1rem" }}
                          />
                        </a>
                      </li>
                      {data.Twitter && data.Twitter[0] && (
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href={
                              data &&
                              data.Twitter &&
                              `https://twitter.com/intent/tweet?screen_name=${
                                data.Twitter[0].split("twitter.com/")[1]
                              }`
                            }
                          >
                            <FontAwesomeIcon
                              icon={["fab", "twitter"]}
                              style={{ color: "#000000", fontSize: "3rem", margin: "1rem" }}
                            />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Member
