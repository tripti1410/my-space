import React from "react"
import Card from "./card.jsx"
import "./popular-work-section.css"

const PopularWorkSection = ({ popularWork }) => {
  return (
    <section className="popular-pens">
      <h2 className="popular-pens-title">SVG and Animations</h2>
      {popularWork.map((work, index) => (
        <Card key={`popular-work-${index}`} {...work} />
      ))}
    </section>
  )
}

export default PopularWorkSection
