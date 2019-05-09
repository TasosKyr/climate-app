import React from "react";
import { signup, upload } from "../../services/auth";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    imgPath: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, imgPath } = this.state;

    signup(username, password, imgPath).then(user => {
      this.props.setUser(user);
      this.props.history.push('/profile')
    });
  };

  handleUpload = event => {
    const file = event.target.files[0];
    console.log(file)
    const data = new FormData();
    data.append("imgPath", file);
    upload(data).then(response => {
      this.setState({ imgPath: response.secure_url });

    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
            />
          </div>

          <div><label>Photo</label>
            <input type="file" name="photo" onChange={this.handleUpload} />
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default Signup;