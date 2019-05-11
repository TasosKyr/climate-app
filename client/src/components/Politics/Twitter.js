import React, { Component } from "react"
import { getTweets } from "../../services/twitter"

class Twitter extends Component {
  state = {
    data: {}
  }

  componentDidMount = () => {
    getTweets().then(data => {
      this.setState({ data: data })
    })
  }

  render() {
    const { data } = this.state

    console.log(data)
    return (
      <div>
        <h2>Tweets</h2>
        {data && data.statuses && data.statuses.map(el => <li>{el.favorite_count}</li>)}
      </div>
    )
  }
}

export default Twitter
