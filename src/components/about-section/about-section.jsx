import "./about-section.css"
import React from "react"

const AboutSection = ({ profileImg }) => {
  return (
    <section className="home-about-container">
      <figure className="home-profile-container">
        <img
          src={profileImg}
          class="home-profile-image"
          alt="Trapti rahangdale"
          width="100%"
        />
      </figure>
      <div class="home-intro">
        <h1 className="about-heading">
          Hi, I'm Trapti. I<span class="visually-hidden">love</span>
          <svg
            aria-hidden="true"
            role="img"
            className="heart"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.1 25"
            aria-labelledby="heart-shape"
          >
            <title id="heart-shape">love</title>
            <path d="M25,8.8C25.2,2,16.8-1.9,12.2,3.1h0c-7-6-16.1,4.5-10.6,11.3h0l.6.7,10,10.7L22.9,14.4h-.1A7.9,7.9,0,0,0,25,8.8Z" />
          </svg>
          SVG, animations and Web
        </h1>

        <p className="content">
          I am a freelance Creative Frontend Engineer based in India. I can help
          you with creating & optimizing SVGs, creating web animations,
          responsive layouts, websites, web applications & much more.
        </p>
        <p className="content">
          I emphasize on <strong>accessibility</strong> and{" "}
          <strong>performance</strong> in my work.
        </p>

        <p className="cta-container">
          <a href="#hire-me" className="button clr-2">
            Hire me
          </a>
          Learn more&nbsp;
          <a href="/about" className="link">
            about me.
          </a>
        </p>
      </div>
    </section>
  )
}

export default AboutSection
