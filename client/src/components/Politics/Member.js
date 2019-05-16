import React, { Component } from "react"
import { get as _get } from "lodash"

import { library } from "@fortawesome/fontawesome-svg-core"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { getMEP } from "../../services/politics"
import { TwitterMentionButton } from "react-twitter-embed"

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
    data && data.Twitter && console.log(data.Twitter[0].substring(20))
    return (
      <>
        <div
          className="page-header"
          data-parallax="true"
          style={{
            backgroundImage: `url(
              "https://bankwatch.org/wp-content/uploads/2017/06/EU-parl.jpg"
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
                      <img
                        src={data.Photo}
                        alt="Circle Image"
                        className="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <div className="name">
                      <h3 className="title">{_get(data, "Name.full")}</h3>

                      <h6>{_get(data, "Groups[0].Organization")}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p>
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
                          className="nav-link"
                          href={"mailto:" + _get(data, "Mail[0]")}
                          role="tab"
                          data-toggle="tab"
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
                              `https://twitter.com/intent/tweet?screen_name=${data.Twitter[0].substring(
                                20
                              )}`
                            }
                            role="tab"
                            data-toggle="tab"
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
