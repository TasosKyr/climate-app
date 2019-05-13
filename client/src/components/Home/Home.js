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

        <div className="card-container">

          <TitleCard 
          title='Climate Politics' 
          description='Here you can find climate change realted legislation' 
          link='/politics'
          image={image1}/>

          <TitleCard 
          title='Take Climate Action' 
          description='Here you can find events & petitions to sign'
          link='/action'
          image={image2} />

          <TitleCard 
          title='Climate Data' 
          description='Here You can see some Climate Change data visulaized'
          link='/data' 
          image={image3}/>
        </div>
      </div>
    )
  }
}

export default Home
