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
      <div>
        <Carousel style={{ height: 300, width: 400 }}>
          <Carousel.Item>
            {tweetIdStr && (
              <div style={{ height: "40vh", overflowY: "scroll" }}>
                <TwitterTweetEmbed
                  tweetId={tweetIdStr}
                  options={{ cards: "hidden", hideCard: true, hideThread: false }}
                />
              </div>
            )}
          </Carousel.Item>
          <Carousel.Item>
            {tweetIdStr1 && (
              <div style={{ height: "40vh", overflowY: "scroll" }}>
                <TwitterTweetEmbed
                  tweetId={tweetIdStr1}
                  options={{ cards: "hidden", hideCard: true, hideThread: false }}
                />
              </div>
            )}
          </Carousel.Item>
          <Carousel.Item>
            {tweetIdStr2 && (
              <div style={{ height: "40vh", overflowY: "scroll" }}>
                <TwitterTweetEmbed
                  tweetId={tweetIdStr2}
                  options={{ cards: "hidden", hideCard: true, hideThread: false }}
                />
              </div>
            )}
          </Carousel.Item>
          <Carousel.Item>
            {tweetIdStr3 && (
              <div style={{ height: "40vh", overflowY: "scroll" }}>
                <TwitterTweetEmbed
                  tweetId={tweetIdStr3}
                  options={{ cards: "hidden", hideCard: true, hideThread: false }}
                />
              </div>
            )}
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ height: "30vh", overflowY: "scroll" }}>
              {tweetIdStr4 && (
                <TwitterTweetEmbed
                  tweetId={tweetIdStr4}
                  options={{ cards: "hidden", hideCard: true, hideThread: false }}
                />
              )}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Twitter
