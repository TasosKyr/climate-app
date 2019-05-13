import React, { Component } from "react"
import Header from "./Header"
import TitleCard from "./TitleCard"
import image1 from '../../images/politics.jpeg'
import image2 from '../../images/action.jpeg'
import image3 from '../../images/data.jpeg'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id='content' className="container page-container">

          <div className='intro-text-container'>
            <p>Welcome to ClimAct – This is a page where we want to help You get more engaged in fighting climate change.
              We have created three categories for you to explore – Politics, Action & Data.
              On the politics section you will find relevant climate change legislation. ON the action page you can find ways to get more engaged in your community or politically. The data page is there for you to explore and understand climate change better.</p>
          </div>
          <hr />

          <div className="card-container">

            <TitleCard
              title='Climate Politics'
              description='Here you can find climate change realted legislation'
              link='/politics'
              image={image1} />

            <TitleCard
              title='Take Climate Action'
              description='Here you can find events & petitions to sign'
              link='/action'
              image={image2} />

            <TitleCard
              title='Climate Data'
              description='Here You can see some Climate Change data visulaized'
              link='/data'
              image={image3} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
