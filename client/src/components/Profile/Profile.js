import React from "react"
import DropDown from "../DropDown"
import UserUpdate from "./UserUpdate"
import axios from "axios"
import bcrypt from "bcryptjs"
import MyEvents from './MyEvents'
import MyPetitions from './MyPetitions'
import { Link } from "react-router-dom"

class Profile extends React.Component {
  state = {
    username: this.props.user.username,
    password: "",
    imgPath: this.props.user.imgPath,
    events: [],
    petitions: [],
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
          events: res.data.events,
          petitions: res.data.petitions
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
          <div className="profile-details">
            <h1>Welcome {this.state.username}!</h1>
            <img src={this.state.imgPath} alt="profilePic" />

            <h1>My ClimActions:</h1>
            <p>Here are all the ClimAction you have saved – go get active!
            <br />
              You can check out more activities to do on the  <a href="/action">Action page</a>
            </p>
          </div>
          <hr />

          <div className='my-actions'>

            <div className='action-list'>
              <h2>Your Climate Events </h2>
              {this.state.events.map(event => {
                return <MyEvents event={event} getCollectionData={this.getCollectionData} />
              })
              }
            </div>
            <div className='action-list'>
              <h2>Your Climate Petitions</h2>
              {this.state.petitions && this.state.petitions.map(petition => {
                return <MyPetitions petition={petition} getCollectionData={this.getCollectionData} />
              })}
            </div>
          </div>
          <hr />
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
