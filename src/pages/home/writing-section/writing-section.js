import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import BLOGS from "../../../data/blogs"
import "./writing-section.css"

const WritingSection = () => {
  return (
    <section className="home-writing-container">
      <h2 className="section-title">Writing on Medium</h2>
      <ul className="medium-blogs">
        {BLOGS.map(blog => (
          <li className="medium-blog" key={blog.id}>
            <OutboundLink
              href={blog.slug}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3 className="medium-blog__title">{blog.title}</h3>
              <p className="medium-blog__subtitle">{blog.subtitle}</p>
            </OutboundLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WritingSection
