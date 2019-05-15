import React, { Component } from 'react'
import jsonfile from '../../DataFiles/emissions_EU.json'

export default class EmissionsUserSelection extends Component {

  render() {
    return (
      <div className="user-selection-form2">
        <h4>Greenhouse gas emissions per EU capita</h4>

        <div>
          <select value={this.props.country} onChange={(e) => this.props.changed(e)} className="select" name="country">
            <option>Choose a country</option>
            {Object.keys(jsonfile).map(el => <option value={el}>{el}</option>)}
          </select>
        </div>
        <br />
        <div>
          <select value={this.props.startYearEU} onChange={(e) => this.props.changed(e)} className="select" name="startYearEU">
            <option>Choose a start year</option>
            {Object.keys(jsonfile.Austria).map(el => <option value={el}>{el}</option>)}
          </select>
          <br />
          <select value={this.props.endYearEU} onChange={(e) => this.props.changed(e)} className="select" name="endYearEU">
            <option>Choose an end year</option>
            {Object.keys(jsonfile.Austria).map(el => <option value={el}>{el}</option>)}
          </select>
        </div>

      </div >
    )
  }
}