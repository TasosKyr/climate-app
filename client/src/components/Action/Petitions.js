import React, { Component } from 'react'
import axios from "axios";


export default class Petitions extends Component {

  state = {
    petitions: []
  }

  getEvent = async () => {

    const newPetitions = await axios.get('http://localhost:5000/petitions');
    this.setState({ petitions: newPetitions.data })
  }

  componentDidMount() {
    this.getEvent()
  }

  render() {
    return (
      <div>
        {this.state.petitions.map(petition => {
          return (
            <div className="card events-card" key={petition.id ? petition.id : petition._id}>
              <div className="card-body">
                <h3 className="card-title events-cart-title">{petition.title}</h3>
                <div>
                  <a href={petition.url}>More Information Here</a>
                </div>
              </div>
            </div>
          )
        })}


      </div>
    )
  }
} 
