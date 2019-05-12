import React, { Component } from "react"
import Header from "./Header"
import TitleCard from "./TitleCard"

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="card-container">

          <TitleCard 
          title='Climate Politics' 
          description='Here you can find climate change realted legislation' 
          link='/politics'/>

          <TitleCard 
          title='Take Climate Action' 
          description='Here you can find events & petitions to sign'
          link='/action' />

          <TitleCard 
          title='Climate Data' 
          description='Here You can see some Climate Change data visulaized'
          link='/data' />
        </div>
      </div>
    )
  }
}

export default Home
