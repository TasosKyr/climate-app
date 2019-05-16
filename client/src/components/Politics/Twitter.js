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
    const tweetIdStr3 = _get(data, "statuses[3].id_str")
    const tweetIdStr4 = _get(data, "statuses[4].id_str")
    return (
      <Carousel>
        <Carousel.Item style={{ height: 400 }}>
          {tweetIdStr && (
            <TwitterTweetEmbed
              autoHeight
              tweetId={tweetIdStr}
              options={{ cards: "hidden", hideCard: true, hideThread: false }}
            />
          )}
        </Carousel.Item>
        <Carousel.Item style={{ height: 400 }}>
          {tweetIdStr1 && (
            <TwitterTweetEmbed
              autoHeight
              tweetId={tweetIdStr1}
              options={{ cards: "hidden", hideCard: true, hideThread: false }}
            />
          )}
        </Carousel.Item>
        <Carousel.Item style={{ height: 400 }}>
          {tweetIdStr2 && (
            <TwitterTweetEmbed
              autoHeight
              tweetId={tweetIdStr2}
              options={{ cards: "hidden", hideCard: true, hideThread: false }}
            />
          )}
        </Carousel.Item>
        <Carousel.Item style={{ height: 400 }}>
          {tweetIdStr3 && (
            <TwitterTweetEmbed
              autoHeight
              tweetId={tweetIdStr3}
              options={{ cards: "hidden", hideCard: true, hideThread: false }}
            />
          )}
        </Carousel.Item>
        <Carousel.Item style={{ height: 400 }}>
          {tweetIdStr4 && (
            <TwitterTweetEmbed
              autoHeight
              tweetId={tweetIdStr4}
              options={{ cards: "hidden", hideCard: true, hideThread: false }}
            />
          )}
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Twitter
