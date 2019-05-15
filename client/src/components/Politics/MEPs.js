import React, { Component } from "react"
import { Link } from "react-router-dom"
import { getJSON } from "../../services/politics"

class MEPs extends Component {
  state = {
    data: {}
  }

  componentDidMount = () => {
    getJSON().then(data => {
      console.log("MEPs", data)
      this.setState({ data: data })
    })
  }

  render() {
    const { data } = this.state
    console.log(this.props.match.params.id)
    let match = undefined
    if (this.props.match.params.id === "GUENGL") {
      match = "GUE/NGL"
    } else if (this.props.match.params.id === "VALE") {
      match = "Verts/ALE"
    } else match = this.props.match.params.id

    return (
      <>
        <div className="header-container-politics" />
        {console.log(match)}
        <div>
          {data &&
            data.meps &&
            data.meps
              .filter(el => el.Groups[0].groupid === match)
              // this.props.match.params.id)
              .map(el => (
                <div className="shaded-box">
                  <Link to="/politics/...party.../{el.UserID}">{el.Name.full}</Link>
                </div>
              ))}
        </div>
      </>
    )
  }
}

export default MEPs
