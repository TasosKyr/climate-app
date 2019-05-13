import React, { Component } from 'react'
import DataCard from "./DataCard"
import UserSelection from "./UserSelection"

export default class Data extends Component {
  render() {
    return (
      <>
        <div className="container page-container">
          <h1>Climate Data</h1>
          <UserSelection /* userChoices={} */ />
          <DataCard />
        </div>
      </>
    )
  }
}
