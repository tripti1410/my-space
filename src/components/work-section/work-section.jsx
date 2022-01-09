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

    </section>
  )
}

export default WorkSection
