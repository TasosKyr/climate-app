import React from "react";
import { login } from "../../services/auth";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;

    login(username, password).then(user => {
      this.props.setUser(user);
      this.props.history.push("/profile")
      /* this.setState({
        username: "",
        password: ""
      }); */
    });
  };

  render() {

    return (
      <>
        <h2>Login</h2>
        <div className="user-selection-form">
          <form onSubmit={this.handleSubmit}>
            <div className="inp">
              <label>username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
            <div className="inp">
              <label >password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <br />
            <div><input className='button1' type="submit" value="login" /></div>

          </form>
        </div>
      </>
    );
  }
}

export default Login;