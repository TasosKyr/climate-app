import React from "react"


function Header() {
  return (
    <>
      <div className="header-container">
        <div className="heading">
          <h1>ClimAct</h1>
          <p>Take Political Action to fight Climate Change!</p>
          <div className="arrow bounce">
            <a href="#"><i class="fas fa-arrow-circle-down"></i></a>
            {/* <a className="fa fa-arrow-down fa-2x" href="#"></a> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
