import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'


export default class DataCard extends Component {

  render() {
    let city;
    let cityName;
    let incidentDescription;
    let incidentType;
    let apiDataObj;
    let dataObj;
    let citiesObject = {
      1: "New York",
      2: "Los Angeles",
      3: "Chicago",
      12: "San Diego",
      17: "San Francisco",
      18: "Austin"
    }

    if (this.props.incidentInfo) {
      city = this.props.incidentInfo.city.id
      cityName = citiesObject[city]
      incidentType = this.props.incidentInfo.indicator.label
      incidentDescription = this.props.incidentInfo.indicator.description
      apiDataObj = this.props.incidentInfo.data
      dataObj = Object.keys(apiDataObj).map((el) => {
        return {
          [el]: apiDataObj[el].max
        }
      })
      console.log(dataObj)
      var graphData = {
        labels: dataObj.map(el => {
          return Object.keys(el)[0]
        }),
        datasets: [{
          label: `${incidentType} in ${cityName}`,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: dataObj.map(el => {
            return Object.values(el)[0]
          })
        }],
      };
    }

    return (
      <div>
        <div id='graph' className='chart1'>
          <p>{incidentDescription}</p>
          {this.props.incidentInfo && <HorizontalBar data={graphData} />}
        </div>
      </div>
    )
  }
}

