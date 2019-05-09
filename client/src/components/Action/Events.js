import React, { Component } from 'react'
import axios from "axios";
import EventForm from './EventForm'

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

        {this.state.data.events.map(event => {
          return (
            <div className="card events-card" key={event.id}>
              <div className="card-body">
                <h3 className="card-title events-cart-title">{event.name}</h3>
                <p className="card-text">Date: {event.local_date}</p>
                <p className="card-text">Time: {event.local_time}</p>
                {typeof event.venue !== 'undefined' &&
                  <p className="card-text">Place: {event.venue.name}</p>
                }
                <div>
                  <a href={event.link}>More Information Here</a>
                </div>
              </div>
            </div>
          )
        })}
        <EventForm />
      </div>
    )
  }
}
