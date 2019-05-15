import React, { Component } from 'react'

export default class UserUpdate extends Component {
  render() {
    return (
      <div className="user-selection-form">
        <form onSubmit={this.props.handleSubmit}>
          <label>Update your username</label>
          <div>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.props.handleChange}
              value={this.props.username}
            />
          </div>
          <div>
            <label>Update your password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={this.props.handleChange}
              value={this.props.password}
            />
          </div>
          <input className='button1' type="submit" value="Save" />
        </form>
      </div>
    )
  }
}
