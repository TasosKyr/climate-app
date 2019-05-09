import React from "react"
import TitleCard from "./TitleCard"

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="heading">
          <h1>Climate Change</h1>
          <p>Take political action!</p>
        </div>
      </div>
      <div className="card-container">
        <TitleCard />
        <TitleCard />
        <TitleCard />
      </div>
    </>
  )
}

export default Header
