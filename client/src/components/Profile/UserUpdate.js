import React, { Component } from 'react'

export default class UserUpdate extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>Update your username</label>
          <div>
            <input
              type="text"
              name="username"
              onChange={this.props.handleChange}
              value={this.props.username}
            />
          </div>
          <div>
            <label>Update your password</label>
            <input
              type="password"
              name="password"
              onChange={this.props.handleChange}
              value={this.props.password}
            />
          </div>
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}
