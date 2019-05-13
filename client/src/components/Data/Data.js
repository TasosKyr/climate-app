import React, { Component } from 'react'
import DataCard from "./DataCard"
import UserSelection from "./UserSelection"

export default class Data extends Component {
  render() {
    return (
      <>
        <div className="container page-container">
          <UserSelection /* userChoices={} */ />
          <DataCard />
        </div>
      </>
    )
  }
}
