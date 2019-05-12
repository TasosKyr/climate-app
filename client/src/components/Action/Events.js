
import React, { Component } from 'react'
import axios from "axios";
import EventForm from './EventForm'


export default class Events extends Component {
  state = {
    events: []
  }

  /**because await, no then */
  getEvent = async () => {

    const eventsBerlin = await axios.get('http://localhost:5000/events');
    this.setState({ events: eventsBerlin.data })
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div>

        {this.state.events.map(event => {
          return (
            <div className="card events-card" key={event.id ? event.id : event._id}>
              <div className="card-body">
                <h3 className="card-title events-cart-title">{event.name}</h3>
                <p className="card-text">Date: {event.local_date}</p>
                <p className="card-text">Time: {event.local_time}</p>
                <p className="card-text">Place: {event.venue}</p>

                <div>
                  <a href={event.link}>More Information Here</a>
                </div>
              </div>
            </div>
          )
        })}
        <EventForm getEvent={this.getEvent} />
      </div>
    )
  }
}
