import React, { Component } from 'react'
import jsonfile from '../../DataFiles/emissions_EU.json'

export default class EmissionsUserSelection extends Component {

  render() {
    return (
      <div className="user-input-data-form">
        <h5>Greenhouse gas emissions per EU capita</h5>
        <p>This indicator shows trends in man-made emissions of the 'Kyoto basket' of greenhouse gases. The 'Kyoto basket' of greenhouse gases includes: carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and the so-called F-gases. Source: Eurostat</p>
        <br />
        <div className="card-body-data">
          <select value={this.props.country} onChange={(e) => this.props.changed(e)} className="select" name="country">
            <option>Choose a country</option>
            {Object.keys(jsonfile).map(el => <option value={el}>{el}</option>)}
          </select>

          <br />

          <select value={this.props.startYearEU} onChange={(e) => this.props.changed(e)} className="select" name="startYearEU">
            <option>Choose start year</option>
            {Object.keys(jsonfile.Austria).map(el => <option value={el}>{el}</option>)}
          </select>
          <br />
          <select value={this.props.endYearEU} onChange={(e) => this.props.changed(e)} className="select" name="endYearEU">
            <option>Choose end year</option>
            {Object.keys(jsonfile.Austria).map(el => <option value={el}>{el}</option>)}
          </select>
        </div>
        <br />
      </div >
    )
  }
}