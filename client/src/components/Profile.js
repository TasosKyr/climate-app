import React from "react";

class Profile extends React.Component {
  state = {
    username: this.props.user.username,
    password: "",
    imgPath: this.props.user.imgPath
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    /* edit(username, password).then(user => {
     this.props.setUser(user);
     this.setState({
       username: "",
       password: "",
       imgPath: ""
     });
   }); */
  };

  render() {
    return (
      <div className='profile-page'>
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state.imgPath)}
          <img src={this.state.imgPath} alt="profilePic" />
          <h1>Welcome {this.state.username}!</h1>
          <label>Update your username</label>
          <div>
            <input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </div>
          <div>
            <label>Update your password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <input type="submit" value="Save" />
        </form>
        <h1>Action:</h1>
        <h2>My past events:</h2>
        <h2>My upcoming events:</h2>
      </div>
    )
  }
}
export default Profile;