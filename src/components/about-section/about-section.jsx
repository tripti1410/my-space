import "./about-section.css"
import React from "react"

const AboutSection = ({ profileImg }) => {
  return (
    <section className="home-about-container">
      <figure className="image-container">
        <img src={profileImg} alt="Trapti rahangdale" />
      </figure>
      <h1 className="about-heading">
        Hi, I'm Trapti. I{" "}
        <svg
          className="heart"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.1 25"
        >
          <path d="M25,8.8C25.2,2,16.8-1.9,12.2,3.1h0c-7-6-16.1,4.5-10.6,11.3h0l.6.7,10,10.7L22.9,14.4h-.1A7.9,7.9,0,0,0,25,8.8Z" />
        </svg>{" "}
        SVG, animations and Web
      </h1>
      <p className="content">
        I am a freelance frontend engineer. I can help you with creating and
        optimizing SVGs, creating web animations, responsive layouts, websites,
        webapps and many more.
      </p>
      <p className="content">
        I emphasize on <strong>accessibility</strong> and{" "}
        <strong>performance</strong> in my work.
      </p>
      <p className="content">
        I blog on these topics and I am available as a guest author.
      </p>
      <p className="content">
        <a href="/about" className="link">
          Know more
        </a>
      </p>
    </section>
  )
}

export default AboutSection
