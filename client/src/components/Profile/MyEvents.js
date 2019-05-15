import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class MyEvents extends Component {

  handleTrashClick = (id, event) => {
    event.preventDefault()

    axios
      .post(
        process.env.REACT_APP_SERVER_URL + "/events/delete",
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

        <div className='actionContainer' key={this.props.event._id}>
          <div className="card myActionsBox" >
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{this.props.event.name} <br /> <button className='button1'>
                <a href={this.props.event.link}>More Info</a></button>
                <button className='button1' onClick={this.handleTrashClick.bind(null, this.props.event._id)}><FontAwesomeIcon icon="trash-alt" /></button>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}