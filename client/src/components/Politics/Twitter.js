import React, { Component } from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
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
    const tweetIdStr = data && data.statuses && data.statuses[0] && data.statuses[0].id_str
    console.log(data && data.statuses && data.statuses)
    return (
      <>
        <div>
          <h2>Tweets</h2>
          {tweetIdStr && <TwitterTweetEmbed tweetId={tweetIdStr} />}
        </div>
      </>
    )
  }
}

export default Twitter
