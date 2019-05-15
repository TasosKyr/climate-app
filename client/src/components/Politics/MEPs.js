import React, { Component } from "react"
import { Link } from "react-router-dom"
import { getParty } from "../../services/politics"

class MEPs extends Component {
  state = {
    data: []
  }

  componentDidMount = () => {
    getParty(this.props.match.params.partyID).then(data => {
      console.log("MEPs", data)
      this.setState({ data: data })
    })
  }

  render() {
    const { data } = this.state
    return (
      <>
        <div className="header-container-politics" />
        <div>
          {data &&
            data.map(el => (
              <div className="shaded-box">
                <Link to={`/politics/${this.props.match.params.partyID}/${el.UserID}`}>
                  {el.Name.full}
                </Link>
              </div>
            ))}
        </div>
      </>
    )
  }
}

export default MEPs
