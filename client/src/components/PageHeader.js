import React from "react"

function PageHeader(props) {
  return (
    <>
      <div className="page-header" style={{backgroundImage:`url(${props.image})`}}>
        <div className="heading-action">
          {/* <img className="card-img-top" src= alt="Card image cap" /> */}
        </div>
      </div>

    </>
  )
}

export default PageHeader