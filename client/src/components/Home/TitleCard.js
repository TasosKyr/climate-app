
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class TitleCard extends Component {
  render() {
    return (
      <div className="card" >
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
          {this.props.description}
        </p>
          <Link to={this.props.link} className="btn btn-primary">
            Learn More!
        </Link>
        </div>
      </div>
    )
  }
}

export default TitleCard
