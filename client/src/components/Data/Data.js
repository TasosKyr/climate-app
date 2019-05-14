import React, { Component } from 'react'
import DataCard from "./DataCard"
import UserSelection from "./UserSelection"

export default class Data extends Component {
  state = {
    incidentType: "",
    city: "",
    startYear: "",
    endYear: ""
  };

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
        <DataCard {...this.state} />
      </div>
      </div>
      </>
    )
  }
}
