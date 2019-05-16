import React, { Component } from "react"
import { get as _get } from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getMEP } from "../../services/politics"

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
    console.log(data)
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
                  {data &&
                    data.Addresses &&
                    data.Addresses.Postal.map(el => <li style={{ listStyle: "none" }}>{el}</li>)}
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile-tabs">
                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                          <i className="material-icons">Email</i>
                          abc
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                          <FontAwesomeIcon icon={["fab", "facebook-f"]} style={{ color: "lightGrey" }} />
                          abc
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                          <i className="material-icons">Facebook</i>
                          abc
                        </a>
                      </li>
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
