import React from "react"

import "$src/styles/projects.css"

const Projects = ({ repos, magazineImageUrl }) => {
  return (
    <>
      <section>
        {repos.map((repo) => (
          <div key={repo.id} className="project">
            <h2 className="project-name">{repo.name}</h2>
            <div className="project-details">
              <span className="project-stars">✷&nbsp;{repo.stars}</span>
              <span className="badge">
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </span>
              {repo.homepage && (
                <span className="badge">
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </span>
              )}
            </div>
            <p>{repo.description}</p>
          </div>
        ))}
      </section>
      <aside>
        <a
          href="https://codepen.io/tripti1410/full/WqXegY"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2 className="project-aside-title">CSS Grid Layout</h2>
          <article className="aside-project">
            <p className="">
              Created this as part of Codepen challenge, and this got added to
              codepen dessert collection. This responsive layout is designed by
              me with customized icons and small animation.
            </p>

            <figure className="">
              <img
                src={magazineImageUrl}
                alt="magazine layout of an Indian dessert recipe"
              />
            </figure>
          </article>
        </a>
      </aside>
    </>
  )
}

export default Projects
