import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import jsonfile from '../../DataFiles/emissions_EU.json'

export default class EmissionsDataCard extends Component {

  state = {
    startYear1: this.props.startYearEU,
    endYear1: this.props.endYearEU,
    dataEUavgArr: [],
    checked: false
  }

  handleChange = () => {
    let values;

    this.props.country && (values = Object.values(jsonfile.EU28).slice(this.state.startYear1 - 2000, this.state.endYear1 - 1999))

    this.setState({
      checked: !this.state.checked,
      dataEUavgArr: values
    })
  }

  render() {

    const getDataArray = () => {
      let dataArr = []
      this.props.country && (dataArr = Object.values(jsonfile[this.props.country]).slice(this.state.startYear1 - 2000, this.state.endYear1 - 1999))
      return dataArr
    }

    const getYearArray = () => {
      const yearArr = []
      for (let i = this.state.startYear1; i <= this.state.endYear1; i++) {
        yearArr.push(Number(i))
      }
      return yearArr.filter(el => el !== 0)
    }

    const maxScale = Math.ceil(Math.max(
      Math.max(...getDataArray()),
      Math.max(...this.state.dataEUavgArr)
    ))

    let graph2Data = {
      labels: getYearArray(),
      datasets: [{
        label: this.state.checked ? 'EU average' : '',
        type: 'line',
        data: this.state.checked ? this.state.dataEUavgArr : [],
        fill: false,
        borderColor: this.state.checked ? '#EC932F' : "#FFFFFF",
        backgroundColor: this.state.checked ? '#EC932F' : "#FFFFFF",
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      }, {
        type: 'bar',
        label: this.props.country,
        data: getDataArray(),
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }]
    };

    let options = {
      responsive: true,
      //maintainAspectRatio: false,
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },

          }
        ],
        yAxes: [
          {
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            ticks: {
              beginAtZero: true,
              max: maxScale,
              min: 0,
              stepSize: 1,
            },
            gridLines: {
              display: true
            }
          },
          {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            ticks: {
              beginAtZero: true,
              max: maxScale,
              min: 0,
              stepSize: 1,
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    return (
      <div >
        <div >
          <label>
            Display EU average
            <input
              type="checkbox"
              checked={this.state.checked} onChange={this.handleChange} />
          </label>
        </div>
        <div id='graph' className='chart1'>
          <Bar data={graph2Data} options={options}
          />
        </div>
      </div >
    )
  }
}

