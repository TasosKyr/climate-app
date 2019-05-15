import React, { Component } from "react"
import axios from "axios"
import Event from "./Event"
import { PacmanLoader } from 'react-spinners';

export default class Events extends Component {
  state = {
    events: [],
    userEvents: this.props.userEvents || [],
    loading: true

  }

  getEvent = async () => {
    const eventsBerlin = await axios.get(process.env.REACT_APP_SERVER_URL + "/events")
    this.setState({ events: eventsBerlin.data, loading: false })
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div>
        {this.state.loading ? <PacmanLoader
          sizeUnit={"px"}
          size={20}
          color={'#295135'}
        /> :
          this.state.events.map(event => {
            return <Event event={event} starred={this.state.userEvents.includes(event._id)} />
          })}
      </div>
    )
  }
}
