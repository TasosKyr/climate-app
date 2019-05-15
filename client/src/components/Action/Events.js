import React, { Component } from "react"
import axios from "axios"
import Event from "./Event"

export default class Events extends Component {
  state = {
    events: [],
    userEvents: this.props.userEvents || []

  }

  getEvent = async () => {
    const eventsBerlin = await axios.get(process.env.REACT_APP_SERVER_URL + "/events")
    this.setState({ events: eventsBerlin.data })
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div>
        {this.state.events.map(event => {
          return <Event event={event} starred={this.state.userEvents.includes(event._id)} />
        })}
      </div>
    )
  }
}
