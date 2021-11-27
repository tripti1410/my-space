import React from "react"
import Layout from "../layout-components/layout"
import magazineLayout from "../images/magzine-layout.jpg"
import "./projects.css"

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
    }
  }
  componentDidMount() {
    //Not supporting IE as of now
    fetch('https://api.github.com/users/tripti1410/repos?sort="updated', {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(res => res.json())
      .then(repos =>
        this.setState({ repos: repos.filter(repo => repo.fork === false) })
      )
  }

  render() {
    return (
      <Layout>
        <main id="main" className="projects-page">
          <h1 className="title">Projects</h1>
          <section>
            {this.state.repos.map(repo => (
              <div key={repo.id} className="project">
                  <h2 className="project-name">{repo.name}</h2>
                  <div className="project-details">
                    <span className="project-stars">✷&nbsp;{repo["stargazers_count"]}</span>
                    <span className="badge"><a href={repo.url} target="_blank" rel="noopener noreferrer">Github</a></span>
                    {repo.homepage && <span className="badge">
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </span>}
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
                  Created this as part of Codepen challenge, and this got added
                  to codepen dessert collection. This responsive layout is designed by
                  me with customized icons and small animation.
                </p>
              
              <figure className="">
                <img
                  src={magazineLayout}
                  alt="magazine layout of an Indian dessert recipe"
                />
              </figure>
            </article>
            </a>
          </aside>
        </main>
      </Layout>
    )
  }
}

export default Projects
