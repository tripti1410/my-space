import React from "react"
import "./testimonial.css"

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What people say</h2>
      <blockquote>
        I had the chance to work with Trapti on a tricky svg animation, not only
        she delivered a perfect work in time and struggled to solve challenging
        points of the project, but she also gave me advices and followed up the
        project in the next days, to check if everything was alright. I plan to
        work with her in the future, and I would recommend her to anyone, not
        only for her design and coding skills, but also for her super
        professional attitude.
        <footer>Alexandra Spalato - Co-Founder GatsbyWPThemes</footer>
      </blockquote>
      <blockquote>
        We were looking for a few high-end animation prototypes to bring particular sports photos to life, and Tripti delivered! She brought creativity to the table, plus her extreme attention to coding details.
        <footer>Alan Karben - Presiden at XML Team Solutions, LLC</footer>
      </blockquote>
    </div>
  )
}

export default Testimonial

