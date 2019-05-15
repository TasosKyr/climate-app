import React, { Component } from "react"
import { getMEP } from "../../services/politics"

class Member extends Component {
  // this.props.match.params.party
  // this.props.match.params.mepID

  componentDidMount() {
    getMEP(this.props.match.params.mepID).then(data => {
      this.setState({ data: data })
    })
  }

  render() {
    return (
      <div>
        <h3>something here!</h3>
      </div>
    )
  }
}

export default Member
