import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import BLOGS from "../../../data/blogs"
import "./writing-section.css"

const WritingSection = () => {
  return (
    <section className="home-writing-container">
      <h2 className="section-title">Writing</h2>
      <ul className="blogs">
        {BLOGS.map(blog => (
          <li className="blog" key={blog.id}>
            <OutboundLink
              href={blog.slug}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3 className="blog__title">{blog.title}</h3>
              {blog.publication && <span className="blog__badge">{blog.publication}</span>}
              <p className="blog__subtitle">{blog.subtitle}</p>
            </OutboundLink>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WritingSection
