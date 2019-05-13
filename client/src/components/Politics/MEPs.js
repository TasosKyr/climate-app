import React, { Component } from "react"
import { getJSON } from "../../services/politics"

class MEPs extends Component {
  state = {
    data: {}
  }

  componentDidMount = () => {
    getJSON().then(data => {
      this.setState({ data: data })
    })
  }
  render() {
    const { data } = this.state
    console.log("MEPs", data)
    return <div>{data && data.meps && data.meps[0] && data.meps[0].Name && data.meps[0].Name.full}</div>
  }
}

export default MEPs
