import React from "react"
// import { OutboundLink } from "gatsby-plugin-google-analytics"
import "./writing-section.css"

const WritingSection = ({ blogs }) => {
  return (
    <section className="home-writing-container">
      <h2 className="section-title" id="home-writing-title">articles I have written:</h2>
      <ul className="blogs">
        {blogs.map((blog) => (
          <li className="blog" key={blog.id}>
            <a href={blog.slug} rel="noopener noreferrer">
              <h3 className="blog__title">{blog.title}</h3>
              {blog.publication && (
                <span className="blog__badge">{blog.publication}</span>
              )}
              <p className="blog__subtitle">{blog.subtitle}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WritingSection
