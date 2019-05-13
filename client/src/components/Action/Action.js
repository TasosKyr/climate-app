import React, { Component } from 'react'
import Events from "./Events"
import { Link } from "react-router-dom";
import DropDown from '../DropDown'
import Petitions from './Petitions'
import Letters from './Letters'
import ActionHeader from './ActionHeader'


class Action extends Component {
  render() {
    return (
      <div>

        <ActionHeader />
        <p>We encourage all interested people to take action towards fighting climate change. Here you can check out the events near you and sign petitions</p>
        <hr />

        <h1>Climate Events</h1>
        <p>Participating in events, demonstrations and taking part of your community is one good way to act. Here we have gathered some great events that you can participate in</p>

        <DropDown title='Check out These Climate Events'>
          <Events />
        </DropDown>

        <hr />
        <h1>Climate Petitions</h1>
        <p>Getting your voice heard can be tough, but together we can make the decision makers listen – sign a petition and let the politicians know you demand change!</p>

        <DropDown title='Check out These Petitions'>
          <Petitions />
        </DropDown>

        <h1>Get your Climate Action Opinion Published</h1>
        <p> A letter to the editor can foster conversations about climate change</p>

        <DropDown title='Get your climate action opinion published'>
          <Letters />
        </DropDown>

        <hr />

      </div>
    )
  }
}

export default Action; 