import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import jsonfile from '../../DataFiles/emissions_EU.json'

const yearArr = []


export default class EmissionsDataCard extends Component {

  render() {

    const startYear1 = this.props.startYearEU
    const endYear1 = this.props.endYearEU

    const getYearArray = () => {
      for (let i = startYear1; i <= endYear1;) {
        yearArr.push(i++)
      } return yearArr
    }

    console.log('This is the yearArr', getYearArray())
    console.log(startYear1)

    let graph2Data = {
      labels: [yearArr],
      datasets: [{
        label: 'EU average',
        type: 'line',
        data: [51, 65, 40, 49, 60, 37, 40],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      }, {
        type: 'bar',
        label: 'Country',
        data: [200, 185, 590, 621, 250, 400, 95],
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
            gridLines: {
              display: false
            }
          },
          {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    let plugins = [{
      afterDraw: (chartInstance, easing) => {
        const ctx = chartInstance.chart.ctx;
        ctx.fillText("This text drawn by a plugin", 100, 100);
      }
    }];

    return (
      <div>
        <h1>Emissions graph</h1>
        <div id='graph' className='chart2'>
          <Bar data={graph2Data} options={options}
            plugins={plugins} />
        </div>
      </div>
    )
  }
}

