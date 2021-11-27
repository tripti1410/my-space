import React from "react";
import POPULAR_WORK from "../../../data/popular-work";
import Card from "./card";
import "./popular-work-section.css";

const PopularWorkSection = () => {
  return (
    <section className="popular-pens">
      <h2 className="popular-pens-title">SVG and Animations</h2>
      {POPULAR_WORK.map((work, index) => <Card key={`popular-work-${index}`} {...work}/>)}
    </section>
  )
}

export default PopularWorkSection;
