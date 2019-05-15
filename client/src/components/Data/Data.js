import React, { Component } from 'react'
import DataCard from "./DataCard"
import UserSelection from "./UserSelection"
import DataPopUp from "./DataPopUp";
import { getData } from "../../services/data";
import EmissionsDataCard from "./EmissionsDataCard"
import EmissionsUserSelection from "./EmissionsUserSelection"


export default class Data extends Component {
  state = {
    incidentType: "",
    city: "",
    startYear: "",
    endYear: "",
    incidentInfo: null,
    country: "",
    startYearEU: "Choose a year",
    endYearEU: null
  };

  handleClick = () => {
    let startYear = this.state.startYear
    let endYear = this.state.endYear
    let type = this.state.incidentType
    let city = this.state.city
    let years = `${startYear}:${endYear}`
    let country = this.state.country
    let startYearEU = this.state.startYearEU
    let endYearEU = this.state.endYearEU
    let data = {
      type,
      city,
      years
    }

    getData(data).then(res => {
      this.setState({
        incidentInfo: res,
      })
    })
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <div className="container page-container">
          <h1>Climate Data</h1>
          <div className='data-page'>

            <div class="card">
              <div class="card-body card-body-data">
                This is some text within a card body.
               <UserSelection changed=
                  {this.handleChange}
                  {...this.state} />
                <DataPopUp title='Extreme climate incidents in US' >
                  <DataCard {...this.state} clicked={this.handleClick} />
                </DataPopUp>
              </div>
            </div>


            <div class="card">
              <div class="card-body ">
                This is some text within a card body.
              <EmissionsUserSelection {...this.state} changed={this.handleChange} />
                <DataPopUp title='Gas emission in EU' >
                  <EmissionsDataCard {...this.state} clicked={this.handleClick} />
                </DataPopUp>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
