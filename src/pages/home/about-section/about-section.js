import React from "react";
import profile from "../../../images/profile.jpg"
import "./about-section.css";
import { Link } from "gatsby"

const AboutSection = () => {
  return (
    <section className="home-about-container">
      <figure className="image-container">
        <img src={profile} alt="Trapti rahangdale" />
      </figure>
      <h1 className="about-heading">Hi, I'm Trapti. I'm a Frontend Engineer</h1>
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
      <p className="content">
        <Link to="/about" className="link">Know more</Link>
      </p>
    </section>
  )
}

export default AboutSection
