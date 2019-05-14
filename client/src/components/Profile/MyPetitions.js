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
      <div>

        <div className='actionContainer'>
          <div className="card myActionsBox" >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.petition.title} <br /> <button className='button1'>
                <a href={this.props.petition.url}>More Info</a></button>
                <button className='button1' onClick={this.handleTrashClick.bind(null, this.props.petition._id)}><FontAwesomeIcon icon="trash-alt" /></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
