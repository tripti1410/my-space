import React from "react"
import "./work-section.css"

const WorkSection = () => {
  return (
    <section className="home-work-container">
      <h2 className="section-title">Work</h2>
      <div className="work">
        <div className="work-preview">
        <img src="/assets/LSC-home-page-full.jpg" alt="homepage design of lifesci communications" />
        </div>
        <p>This is the website I created for Lifesci communications. Read details about this project <a href="/project/lifesci-project-details">here</a></p>
      </div>

    </section>
  )
}

export default WorkSection
