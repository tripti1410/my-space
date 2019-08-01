import React from "react"

const Card = ({ title, description, imgSrc, link }) => {
  return (
    <article className="popular-pen">
      <h3 className="popular-pen-title">{title}</h3>
      <p className="popular-pen-description">{description}</p>
      <figure className="popular-pen-media">
        <img src={imgSrc} alt={title} />
      </figure>
      <div className="popular-pen-link-container">
        <a href={link} target="_blank" className="go-to-codepen">
          Open at Codepen
        </a>
      </div>
    </article>
  )
}

export default Card
