import React from "react"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
import "./mentions-section.css"

const MentionsSection = () => {
  return (
    <section className="home-mentions-container">
      <h2 className="section-title" id="home-recognition-title">recognition on social media:</h2>
      <div className="mentions">
        <div>
          <blockquote
            class="twitter-tweet"
            data-conversation="none"
            data-dnt="true"
          >
            <p lang="en" dir="ltr">
              Some notable mentions... GSAP forum regular, and animation
              superstar Trapti
              <a href="https://twitter.com/imtraptir?ref_src=twsrc%5Etfw">
                @imtraptir
              </a>
              , recreated the apple airpods site! Beautiful work.
              <a href="https://t.co/xVjmYUvUFk">https://t.co/xVjmYUvUFk</a>
              <a href="https://t.co/v7mfMgCkRm">pic.twitter.com/v7mfMgCkRm</a>
            </p>
            &mdash; GreenSock (@greensock)
            <a href="https://twitter.com/greensock/status/1514196122696302595?ref_src=twsrc%5Etfw">
              April 13, 2022
            </a>
          </blockquote>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
        <div>
          <blockquote class="twitter-tweet" data-dnt="true">
            <p lang="en" dir="ltr">
              Great effect! Very slick.{" "}
              <a href="https://twitter.com/hashtag/svg?src=hash&amp;ref_src=twsrc%5Etfw">
                #svg
              </a>{" "}
              <a href="https://twitter.com/hashtag/svgSummer?src=hash&amp;ref_src=twsrc%5Etfw">
                #svgSummer
              </a>{" "}
              <a href="https://t.co/l9ZzdgExaV">https://t.co/l9ZzdgExaV</a>
            </p>
            &mdash; carl schooff (@snorklTV){" "}
            <a href="https://twitter.com/snorklTV/status/1541037160639373313?ref_src=twsrc%5Etfw">
              June 26, 2022
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
        <div>
          <blockquote
            class="twitter-tweet"
            data-conversation="none"
            data-dnt="true"
          >
            <p lang="en" dir="ltr">
              Trapti, you get an honourable mention for the second week in a
              row.
              <a href="https://twitter.com/imtraptir?ref_src=twsrc%5Etfw">
                @imtraptir
              </a>
              We loved this scrolly line animation. Beautiful work!{" "}
              <a href="https://t.co/E4nc2r6qby">https://t.co/E4nc2r6qby</a>{" "}
              <a href="https://t.co/5AK59ImLc4">pic.twitter.com/5AK59ImLc4</a>
            </p>
            &mdash; GreenSock (@greensock){" "}
            <a href="https://twitter.com/greensock/status/1516751223931682819?ref_src=twsrc%5Etfw">
              April 20, 2022
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </section>
  )
}

export default MentionsSection
