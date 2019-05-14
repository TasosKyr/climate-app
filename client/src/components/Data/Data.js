import React, { Component } from 'react'
import DataCard from "./DataCard"
import UserSelection from "./UserSelection"
import DataPopUp from "./DataPopUp";
import { getData } from "../../services/data";
import EmissionsDataCard from "./EmissionsDataCard"


export default class Data extends Component {
  state = {
    incidentType: "",
    city: "",
    startYear: "",
    endYear: "",
    incidentInfo: null,
  };

  handleClick = () => {
    let startYear = this.state.startYear
    let endYear = this.state.endYear
    let type = this.state.incidentType
    let city = this.state.city
    let years = `${startYear}:${endYear}`
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
            <UserSelection changed=
              {this.handleChange}
              {...this.state} />
            <DataPopUp title='Extreme climate incidents' >
              <DataCard {...this.state} clicked={this.handleClick} />
            </DataPopUp>
            <EmissionsDataCard />
          </div>
        </div>
      </>
    )
  }
}
