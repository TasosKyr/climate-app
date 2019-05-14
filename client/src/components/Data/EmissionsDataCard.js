import React, { Component } from 'react'
import { HorizontalBar } from 'react-chartjs-2'


export default class EmissionsDataCard extends Component {

  render() {


    return (
      <div>
        <h1>emissions graph</h1>
        <div id='graph' className='chart2'>

          <HorizontalBar /* data={} */ />}
        </div>
      </div>
    )
  }
}

