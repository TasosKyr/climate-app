import React, { Component } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Petition extends Component {

  state = {
    starred: this.props.starred || false
  }

  handleStarClick = (id, event) => {
    event.preventDefault()

    axios
      .post(
        process.env.REACT_APP_SERVER_URL + "/petitions/star",
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
  star = <FontAwesomeIcon icon="star" style={{ color: "lightGrey" }} />
  starChosen = <FontAwesomeIcon icon="star" style={{ color: "#295135" }} />

  render() {

    let starred
    if (this.state.starred) {
      starred = this.starChosen
    } else {
      starred = this.star
    }

    return (
      <div>

        <div className="card events-card" key={this.props.petition._id}>
          <div className="card-body">
            <h3 className="card-title events-cart-title">{this.props.petition.title}</h3>
            <div>
              <a href={this.props.petition.url}>More Information Here</a>
            </div>
            <h2><a href="#" onClick={this.handleStarClick.bind(null, this.props.petition._id)}>
              {starred}
            </a></h2>
          </div>
        </div>

      </div>
    )
  }
}
