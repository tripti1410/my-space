import React from "react";
import profile from "../../../images/profile.jpg"
import "./about-section.css";

const AboutSection = () => {
  return (
    <section className="home-about-container">
      <figure className="image-container">
        <img src={profile} alt="Trapti rahangdale" />
      </figure>
      <p className="content">Hi, I'm Trapti. I'm a Frontend Engineer</p>
      <p className="content">
        I am passionate about building a responsive, accessible, performant web
        for everyone. I love SVG, animations and CSS grid the most.
      </p>
      <p className="content">
        Core skills are &nbsp;
        <strong>HTML CSS & JAVASCRIPT.</strong>
      </p>
      <p className="content">
        Currently focusing on learning &nbsp;
        <strong>web animations, SVG's and accessibility.</strong>
      </p>
      {/* <p className="content">
        <a href="/about" className="link">
          Know more
        </a>
      </p> */}
    </section>
  )
}

export default AboutSection
