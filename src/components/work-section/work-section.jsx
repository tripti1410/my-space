import React from "react"
import "./work-section.css"

const WorkSection = () => {
  return (
    <section className="home-work-container">
      <h2 className="section-title">Work</h2>
      <div className="work">
        <figure className="work-preview">
        <img src="/assets/LSC-home-page-full.jpg" alt="homepage design of LifeSci Communications" />
        </figure>
        <figcaption>
        <a href="/project/lifesci-project-details">LifeSci Communications </a>
        </figcaption>
      </div>
      <div>
      <figure >
        <img src="/assets/space-tourism-home-page.png" alt="homepage design of Space Tourism" />
      </figure>
      <figcaption>
        <a href="https://space-tourism-trapti.netlify.app" target="_blank">Space tourism</a>
      </figcaption>
      <p>
        I wanted to get familiar with <a href="https://astro.build">Astro</a>. So I used <a href="https://www.frontendmentor.io/challenges">Frontend Mentor's</a> challenge design and created this in Plain HTML, CSS and Javascript.
       </p>
      </div>
    </section>
  )
}

export default WorkSection
