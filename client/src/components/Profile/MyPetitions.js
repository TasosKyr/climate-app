import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class MyPetitions extends Component {

  handleTrashClick = (id, event) => {
    event.preventDefault()

    axios
      .post(
        process.env.REACT_APP_SERVER_URL + "/petitions/delete",
        {
          id: id,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getCollectionData()
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <>

        <div className="my-card-container" >
          <ul className="my-card">
            <li className="my-item">{this.props.petition.title} <br /> <button className='button1'>
              <a className="text-dark" href={this.props.petition.url}>More Info</a></button>
              <button className='button1' onClick={this.handleTrashClick.bind(null, this.props.petition._id)}><FontAwesomeIcon icon="trash-alt" /></button>
            </li>
          </ul>
        </div>
      </>
    )
  }
}
