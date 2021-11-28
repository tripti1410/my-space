import React from "react"
// import { OutboundLink } from "gatsby-plugin-google-analytics"

const Card = ({ title, description, imgSrc, link }) => {
  return (
    <article className="popular-pen">
      <h3 className="popular-pen-title">{title}</h3>
      <p className="popular-pen-description">{description}</p>
      <figure className="popular-pen-media">
        <img data-src={imgSrc} alt={title} className="lazyload" />
      </figure>
      <div className="popular-pen-link-container">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className="go-to-codepen"
        >
          Open at Codepen
        </a>
      </div>
    </article>
  )
}

export default Card
