import React, { Component } from 'react'
import { getData } from "../../services/data";

export default class DataCard extends Component {

  state = {
    incidentInfo: null
  }

  componentDidMount() {
    let startYear = "2010"
    let endYear = "2018"

    let data = {
      years: `${startYear}:${endYear}`,
      type: "heat_wave_incidents",
      city: 12
    }
    getData(data).then(res => {
      this.setState({
        incidentInfo: res
      })
    })
  }

  handleSubmit() {
    getData()
  }
  render() {
    let city;
    let cityName;
    let citiesObject = {
      1: "New York",
      2: "Los Angeles",
      3: "Chicago",
      12: "San Diego"
    }

    if (this.state.incidentInfo) {

      city = this.state.incidentInfo.city.id
      cityName = citiesObject[city]
    }

    return (
      <div>
        <p>Here comes information</p>
        <p>Cityname: {cityName}</p>
      </div>
    )
  }
}

