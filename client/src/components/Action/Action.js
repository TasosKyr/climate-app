import React, { Component } from 'react'
import Events from "./Events"
import { Link } from "react-router-dom";
import DropDown from '../DropDown'



class Action extends Component {
  render() {
    return (
      <div>

        <h1>Take Action!</h1>

        <p>We encourage all interested people to take action towards fighting climate change. Here you can check out the events near you and sign petitions</p>
        <hr />
        <h1>Climate Events</h1>
        <p>Participating in events, demonstrations and taking part of your community is one good way to act. Here we have gathered some great events that you can participate in</p>
        <DropDown />
        <hr />
        <h1>Climate Petitions</h1>
        <p>Getting your voice heard can be tough, but together we can make the decision makers listen – sign a petition and let the politicians know you demand change!</p>
        <DropDown />
        <hr />
        <Events />
      </div>
    )
  }
}

export default Action; 