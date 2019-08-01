import React from "react"
import BLOGS from "../../../data/blogs";
import "./writing-section.css";

const WritingSection = () => {
  return (
    <section className="home-writing-container">
      <h2 className="section-title">Writing on Medium</h2>
      <ul className="medium-blogs">
        {BLOGS.map(blog => (
          <li className="medium-blog" key={blog.id}>
            <a href={blog.slug} target="_blank">
              <h3 className="medium-blog__title">{blog.title}</h3>
              <p className="medium-blog__subtitle">{blog.subtitle}</p>
            </a>
          </li>
        ))}
      </ul>
      {/* <section className="layout-pens">
      <h2 className="section-title">CSS Grid Layout</h2> 
      <article className="popular-pen">
        <figure className="popular-pen-media">
          <img
            src={magazineLayout}
            alt="magazine layout of an Indian dessert recipe"
          />
        </figure>
        <div className="pen-overlay" />
        <div className="popular-pen-desc-and-action">
          <p className="popular-pen-description">
            Created this as part of Codepen challenge, and this got added
            to codepen dessert collection. This layout is designed by
            me with customized icons and small animation.
            <a
              href="https://codepen.io/tripti1410/full/WqXegY"
              target="_blank"
              className="go-to-codepen"
            >
              Open at Codepen
            </a>
          </p>
        </div>
      </article>
    </section> */}
    </section>
  )
}

export default WritingSection;
