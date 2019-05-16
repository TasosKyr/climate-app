import React, { Component } from 'react'
import Events from "./Events"
import DropDown from '../DropDown'
import Petitions from './Petitions'
import Letters from './Letters'
import PageHeader from '../PageHeader'
import EventForm from './EventForm'
import image2 from '../../images/action.jpeg'


class Action extends Component {

  state = {
    // user: this.props.user && { ...this.props.user, myCollection: {} } || { myCollection: {} }
    user: this.props.user ? this.props.user : { myCollection: {} }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let user = this.props.user;
      if (!user) user = { myCollection: {} }
      this.setState({ user })
    }
  }

  render() {
    console.log(this.state.user)
    // const myCollection = this.props.user && this.props.user.myCollection ? this.props.user.myCollection : {}
    return (
      <>
        <PageHeader image={image2} />
        <div className="container page-container" id='container'>

          <h1>Action!</h1>

          <p>We encourage all interested people to take action towards fighting climate change. Here you can check out the climate events in Berlin and sign petitions.</p>
          <hr />

          <div className='action-page-card-container'>
            <div class="card">
              <div class="card-body">
                <h1>Climate Events</h1>
                <p>Participating in events, demonstrations and taking part of your community is one good way to act. Here we have gathered some great events that you can participate in</p>

                <DropDown title='Check out These Climate Events'>
                  <Events userEvents={this.state.user.myCollection.events} />
                </DropDown>
                <br />

                <DropDown title='Add Your Own Climate Event' user={this.props.user} protected>
                  <EventForm />
                </DropDown>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h1>Climate Petitions</h1>
                <p>Getting your voice heard can be tough, but together we can make the decision makers listen – sign a petition and let the politicians know you demand change!</p>

                <DropDown title='Check out These Petitions'>
                  <Petitions userPetitions={this.state.user.myCollection.petitions} />
                </DropDown>
              </div>
            </div>

            <div class="card">
              <div class="card-body">

                <h1>Get your Climate Action Opinion Published</h1>
                <p> A letter to the editor can foster conversations about climate change</p>

                <DropDown title='Get your climate action opinion published'>
                  <Letters />
                </DropDown>
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default Action; 