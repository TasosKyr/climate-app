import React, { Component } from 'react'
import { getData } from "../../services/data";

export default class DataCard extends Component {

  state = {
    incidentInfo: null
  }

  componentDidMount() {
    let startYear = "2000"
    let endYear = "2018"
    let data = {
      years: `${startYear}:${endYear}`,
      type: "extreme_cold_events",
      city: 3
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
    let incidentDescription;
    let incidentType;
    let citiesObject = {
      1: "New York",
      2: "Los Angeles",
      3: "Chicago",
      12: "San Diego",
      17: "San Francisco",
      18: "Austin"
    }

    if (this.state.incidentInfo) {
      city = this.state.incidentInfo.city.id
      cityName = citiesObject[city]
      incidentType = this.state.incidentInfo.indicator.label
      incidentDescription = this.state.incidentInfo.indicator.description
    }

    return (
      <div>
        <p>Selected city: {cityName}</p>
        <p>Extreme weather incident type: {incidentType}</p>
        <p>Description: {incidentDescription}</p>
      </div>
    )
  }
}

