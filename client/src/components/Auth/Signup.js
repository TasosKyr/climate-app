import React from "react";
import { signup, upload } from "../../services/auth";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    imgPath: "",
    message: undefined
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
    })
      .catch(err => {
        this.setState({
          message: err.response.data.message
        })
      })
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
      <>
        <div className="container page-container">

          {this.state.message && <h2>{this.state.message}</h2>}
          <div className="user-selection-form">

            <form onSubmit={this.handleSubmit}>
              <h2>Sign Up</h2>
              <div className="inp">
                <label>Username:</label>
                <input
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  name="username"
                />
              </div>
              <div className="inp">
                <label>Password:</label>
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                />
              </div>
              <br />
              <label>Photo</label>
              <div>
                <input className='button1' type="file" name="photo" onChange={this.handleUpload} />
              </div>
              <br />
              <div><input className='button1' type="submit" value="Signup" /> </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;