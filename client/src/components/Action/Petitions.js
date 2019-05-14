import React, { Component } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Petitions extends Component {
  state = {
    petitions: [],
    starred: false
  }

  getEvent = async () => {
    const newPetitions = await axios.get(process.env.REACT_APP_SERVER_URL + "/petitions")
    this.setState({ petitions: newPetitions.data })
  }

  componentDidMount() {
    this.getEvent()
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

        {this.state.petitions.map(petition => {
          return (
            <div className="card events-card" key={petition._id}>
              <div className="card-body">
                <h3 className="card-title events-cart-title">{petition.title}</h3>
                <div>
                  <a href={petition.url}>More Information Here</a>
                </div>
                <h2><a href="#" onClick={this.handleStarClick.bind(null, petition._id)}>
                  {starred}
                </a></h2>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
