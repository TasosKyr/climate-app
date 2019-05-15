import React, { Component } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Petition from './Petition'

export default class Petitions extends Component {
  state = {
    petitions: [],
    userPetitions: this.props.userPetitions || []
  }

  getEvent = async () => {
    const newPetitions = await axios.get(process.env.REACT_APP_SERVER_URL + "/petitions")
    this.setState({ petitions: newPetitions.data })
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {

    return (
      <div>
        {this.state.petitions.map(petition => {
          return <Petition petition={petition} starred={this.state.userPetitions.includes(petition._id)} />
        })}

      </div>
    )
  }
}
