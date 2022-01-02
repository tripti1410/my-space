import React from "react"
import "./testimonial.css"

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What people say</h2>
      <blockquote>
      “We worked with Trapti to build our corporate website. The design was extremely custom with many complex SVG animations. Trapti was a great development partner with a positive attitude and she completed the website build exactly as we had imagined. The complex animations were built to be fully responsive and Trapti was sure to advise us with best practices throughout the process. I recommend Trapti for website development services and hope to partner with her in the future!”
        <footer>Vicki O'Neil - Creative Director, LifeSci Communications</footer>
      </blockquote>
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

