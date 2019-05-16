import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  return (
    <>
      <div className="header-container">
        <div className="heading">
          <h1>ClimAct</h1>
          <p>Take Political Action to fight Climate Change!</p>
          <br />
          <br />
          <br />
          <br />
          <div className="arrow bounce">

            <h3> <a href="#content"><FontAwesomeIcon icon="chevron-down" /></a> </h3>

          </div>
        </div>
      </div>

    </>
  )
}

export default Header
