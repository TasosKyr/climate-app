import React, { Component } from "react"
import axios from "axios"

export default class Event extends Component {
  state = {
    starred: false
  }

  handleStarClick = (id, event) => {
    event.preventDefault()

    axios
      .post(
        process.env.REACT_APP_SERVER_URL + "/api/events/star",
        {
          id: id
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          starred: true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  star = <i class="fas fa-star" />
  starChosen = <i style={{ color: "yellow" }} class="fas fa-star" />

  render() {
    let starred
    if (this.state.starred) {
      starred = this.starChosen
    } else {
      starred = this.star
    }

    return (
      <div
        className="card events-card"
        key={this.props.event.id ? this.props.event.id : this.props.event._id}
      >
        <div className="card-body">
          <h3 className="card-title events-cart-title">{this.props.event.name}</h3>
          <p className="card-text">Date: {this.props.event.local_date}</p>
          <p className="card-text">Time: {this.props.event.local_time}</p>
          <p className="card-text">Place: {this.props.event.venue}</p>
          <div>
            <a href={this.props.event.link}>More Information Here</a>
          </div>
          <div>
            {" "}
            <a href="" onClick={this.handleStarClick.bind(null, this.props.event._id)}>
              {" "}
              {starred}
            </a>
          </div>
        </div>
      </div>
    )
  }
}
