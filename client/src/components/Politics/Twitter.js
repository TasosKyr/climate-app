import React, { Component } from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { Carousel } from "react-bootstrap"
import { get as _get } from "lodash"
import { getTweets } from "../../services/politics"

class Twitter extends Component {
  state = {
    data: {},
    loading: true
  }

  componentDidMount = () => {
    getTweets().then(data => {
      this.setState({ data: data, loading: false })
    })
  }

  render() {
    const { data } = this.state
    // "data && data.statuses && data.statuses[0] && data.statuses[0].id_str" handled by _get
    const tweetIdStr = _get(data, "statuses[0].id_str")
    const tweetIdStr1 = _get(data, "statuses[1].id_str")
    const tweetIdStr2 = _get(data, "statuses[2].id_str")
    return (
      <Carousel>
        <Carousel.Item>{tweetIdStr && <TwitterTweetEmbed tweetId={tweetIdStr} />}</Carousel.Item>
        <Carousel.Item>{tweetIdStr1 && <TwitterTweetEmbed tweetId={tweetIdStr1} />}</Carousel.Item>
        <Carousel.Item>{tweetIdStr2 && <TwitterTweetEmbed tweetId={tweetIdStr2} />}</Carousel.Item>
      </Carousel>
    )
  }
}

export default Twitter
