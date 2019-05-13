import React from "react"
import MyActions from "./MyActions"
import DropDown from "../DropDown"
import UserUpdate from "./UserUpdate"
import axios from "axios"
import bcrypt from "bcryptjs"

class Profile extends React.Component {
  state = {
    username: this.props.user.username,
    password: "",
    imgPath: this.props.user.imgPath,
    events: []
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { username, password } = this.state
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(password, salt)

    axios
      .put(
        process.env.REACT_APP_SERVER_URL + "/profile",
        {
          username: username,
          password: hash
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({
          password: ""
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getCollectionData = () => {
    axios
      .get(
        process.env.REACT_APP_SERVER_URL + "/profile",
        { withCredentials: true }
      )
      .then((res) => {
        this.setState({
          events: res.data.events
        })
      })
  }

  componentDidMount = () => {
    this.getCollectionData();
  }

  render() {
    return (
      <div className="profile-page">
        <h1>Welcome {this.state.username}!</h1>
        <img src={this.state.imgPath} alt="profilePic" />

        <h1>My ClimActions:</h1>
        <MyActions />

        {this.state.events.map(event => {
          return (
            <div>{event.name}</div>
          )
        })
        }

        <DropDown title="Change your Username & Password">
          <UserUpdate
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </DropDown>
        <br />
      </div>
    )
  }
}
export default Profile
