import React, { Component } from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
import { getTweets } from "../../services/twitter"
import { Carousel } from "react-bootstrap"

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
    const tweetIdStr1 = data && data.statuses && data.statuses[1] && data.statuses[1].id_str
    const tweetIdStr2 = data && data.statuses && data.statuses[2] && data.statuses[2].id_str
    console.log(data && data.statuses && data.statuses[0])
    return (
      <Carousel>
        <Carousel.Item>
          {tweetIdStr && <TwitterTweetEmbed tweetId={tweetIdStr} />}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {tweetIdStr1 && <TwitterTweetEmbed tweetId={tweetIdStr1} />}

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {tweetIdStr2 && <TwitterTweetEmbed tweetId={tweetIdStr2} />}

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Twitter
