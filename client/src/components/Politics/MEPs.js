import React, { Component } from "react"
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
    return (
      <div>
        {data &&
          data.meps &&
          data.meps.map(el => (
            <div className="shaded-box">
              {el.Name.full} {el.Groups[0].Organization}
            </div>
          ))}
      </div>
    )
  }
}

export default MEPs
