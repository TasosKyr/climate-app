import React from "react"
import DropDown from "../DropDown"
import UserUpdate from "./UserUpdate"
import axios from "axios"
import bcrypt from "bcryptjs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <>
        <div className="container page-container ">
          <h1>Welcome {this.state.username}!</h1>
          <img src={this.state.imgPath} alt="profilePic" />


          <h1>My ClimActions:</h1>
          <p>Here are all the ClimAction you have saved – go get active!</p>

          {this.state.events.map(event => {
            return (
              <div className='actionContainer'>
                <div className="card myActionsBox" >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{event.name} <br /> <button className='button1'>
                      <a href="{event.link}">More Info</a></button>
                      <button className='button1'><FontAwesomeIcon icon="trash-alt" /></button>

                    </li>
                  </ul>
                </div>
              </div>
            )
          })
          }
          <br />
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
      </>
    )
  }
}
export default Profile
