import React, { Component } from "react"
import { getPolicies } from "../../services/politics"

class EUOpenData extends Component {
  state = {
    data: {}
  }

  componentDidMount = () => {
    getPolicies().then(data => {
      this.setState({ data: data })
    })
  }

  render() {
    const { data } = this.state
    console.log("hello from open data", data)
    return <div />
  }
}

export default EUOpenData
