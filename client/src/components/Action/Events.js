import React, { Component } from 'react'
import axios from "axios";


export default class Events extends Component {

  state = {
    data: { events: [] }
  }

  /**because await, no then */
  getEvent = async () => {
    const eventsBerlin = await axios.get('http://localhost:3000/events');
    this.setState({ data: eventsBerlin.data })
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {

    return (
      <div>
        <h1>Climate Events in Berlin</h1>
        {this.state.data.events.map(event => {
          return (
            <div key={event.id}>
              <h3>{event.name}</h3>

            </div>
          )
        })}

      </div>
    )
  }
}
