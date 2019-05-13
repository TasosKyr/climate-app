import React, { Component } from "react"
import axios from "axios"

export default class EventForm extends Component {
  state = {
    name: "",
    local_date: "",
    local_time: "",
    venue: "",
    address: "",
    city: "",
    description: "",
    link: ""
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios
      .post(
        process.env.REACT_APP_SERVER_URL + "/events",
        {
          ...this.state
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          name: "",
          local_date: "",
          local_time: "",
          venue: "",
          address: "",
          city: "",
          description: "",
          link: ""
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h2>Add Your own event</h2>
        <p>You can do this only if you are a logged in user</p>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Event Name: </label>
              <input
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                type="text"
                required
              />
            </div>

            <div className="form-group">
              <label>Date: </label>
              <input
                className="form-control"
                value={this.state.local_date}
                onChange={this.handleChange}
                name="local_date"
                type="date"
                required
              />
            </div>

            <div className="form-group">
              <label>Start Time:</label>
              <input
                className="form-control"
                value={this.state.local_time}
                onChange={this.handleChange}
                type="time"
                name="local_time"
                required
              />
            </div>

            <div className="form-group">
              <label>Venue/Place: </label>
              <input
                className="form-control"
                value={this.state.venue}
                onChange={this.handleChange}
                type="text"
                name="venue"
                required
              />
            </div>

            <div className="form-group">
              <label>Address: </label>
              <input
                className="form-control"
                value={this.state.address}
                onChange={this.handleChange}
                type="text"
                name="address"
              />
            </div>

            <div className="form-group">
              <label>Description: </label>
              <input
                className="form-control"
                value={this.state.description}
                onChange={this.handleChange}
                type="text"
                name="description"
              />
            </div>

            <div className="form-group">
              <label>Link to Event: </label>
              <input
                className="form-control"
                value={this.state.link}
                onChange={this.handleChange}
                type="text"
                name="link"
                required
              />
            </div>

            <input className="btn btn-primary" type="submit" value="Add Event" />
          </form>
        </div>
      </div>
    )
  }
}
