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
            Climate change is the most important global political topic at the moment. Many people are aware that we need to make big personal and societal changes in order to tackle this problem. On a personal level many of us struggle to find the ways to do more than just abandon the use of plastic straws (we don’t dispute that they should be abandoned). We acknowledge that the changes needed to fight climate change have to be on a systemic level – this means political changes on a national as well as a global level.
              On the politics section you will find relevant climate change legislation. ON the action page you can find ways to get more engaged in your community or politically. The data page is there for you to explore and understand climate change better.</p>
          </div>
          <hr />

          <div className="card-container">

            <TitleCard
              title='Climate Politics'
              description='Here you can find climate change related legislation'
              link='/politics'
              image={image1} />

            <TitleCard
              title='Climate Action'
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
