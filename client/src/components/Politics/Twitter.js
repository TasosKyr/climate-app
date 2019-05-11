import React, { Component } from "react"
import { getTweets } from "../../services/auth"
import axios from "axios"

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
    // axios.get("http://localhost:3000/politics").then(res => {
    //   console.log(res.data)
    //   console.log("hi")
    // })
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
