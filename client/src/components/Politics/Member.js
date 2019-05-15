import React, { Component } from "react"
import { get as _get } from "lodash"
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
          className="page-header header-filter"
          data-parallax="true"
          style={{
            backgroundImage: `url(
              "http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png"
            )`
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

                      <h6>Party name here...</h6>
                      {/* {_get(data, "Groups.Organization")} */}
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble">
                        <i className="fa fa-dribbble" />
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest">
                        <i className="fa fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p>
                  An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
                  Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
                  it a warm, intimate feel with a solid groove structure.{" "}
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile-tabs">
                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                          <i className="material-icons">camera</i>
                          Studio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                          <i className="material-icons">palette</i>
                          Work
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                          <i className="material-icons">favorite</i>
                          Favorite
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
