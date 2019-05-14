import React, { Component } from 'react'
import { getData } from "../../services/data";
import { Polar } from 'react-chartjs-2'

export default class DataCard extends Component {

  state = {
    incidentInfo: null
  }


  handleClick = () => {

    let startYear = this.props.startYear
    let endYear = this.props.endYear
    let type = this.props.incidentType
    let city = this.props.city
    let years = `${startYear}:${endYear}`
    let data = {
      type,
      city,
      years
    }

    getData(data).then(res => {
      this.setState({
        incidentInfo: res
      })
    })
  }

  /*   handleSubmit() {
    getData()
  }
  */
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

    if (this.state.incidentInfo) {
      city = this.state.incidentInfo.city.id
      cityName = citiesObject[city]
      incidentType = this.state.incidentInfo.indicator.label
      incidentDescription = this.state.incidentInfo.indicator.description
      apiDataObj = this.state.incidentInfo.data
      dataObj = Object.keys(apiDataObj).map((el) => {
        return {
          [el]: apiDataObj[el].max
        }
      })
      console.log(dataObj)
      var dataExample = {
        datasets: [{
          data: dataObj.map(el => {
            return Object.keys(el)[0]
          }),
          backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
          ],
          label: 'My dataset'
        }],
        labels: dataObj.map(el => {
          return Object.values(el)[0]
        })
      };
    }



    return (
      <div>
        {console.log(this.state.incidentType)}
        <button onClick={this.handleClick} className='button1'>Get the graph</button>
        <p>Selected city: {cityName}</p>
        <p>Extreme weather incident type: {incidentType}</p>
        <p>Description: {incidentDescription}</p>
        <div className='chart1'>
          <h4>D3 testing</h4>
          <div >
            {this.state.incidentInfo && <Polar data={dataExample} />}
          </div>
        </div>

      </div>
    )
  }
}

