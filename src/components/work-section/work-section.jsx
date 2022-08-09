import React from "react"
import "./work-section.css"

const WorkSection = () => {
  return (
    <section className="home-work-container">
      <h2 className="section-title">Work</h2>
      <div className="home-work-container__project">
        <div className="project-preview">
          <iframe
            src="https://player.vimeo.com/video/662273613?h=90472dee0f&autoplay=1&loop=1&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-description">
          <p>
            I created this complete website for a client which has modern layout
            & line animations on scroll throughout the website. More about this
            project &nbsp;
            <a href="/project/lifesci-project-details/">here</a>.
          </p>
          <p className="tech">
            <span> Tech: </span>
            Wordpress, Elementor, Greensock
          </p>
        </div>
      </div>
      <div className="home-work-container__project">
        <div className="project-preview">
          <iframe
            src="https://player.vimeo.com/video/719851870?h=72cdec4639&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="project-description">
          <p>
            At &nbsp;
            <a href="https://www.equivalent.design">Equivalent Design</a> I'm
            responsible for creating all the animations, this is one of them.
            Making SVG WCAG compliant, clean and performant.
          </p>
          <p className="tech">
            <span> Tech: </span>
            SVG, Greensock
          </p>
        </div>
      </div>
      <div className="home-work-container__project">
        <div className="project-preview">
          <img
            src="https://www.iamtrapti.com/assets/space-tourism-home-page.png"
            alt="website homepage design"
          />
        </div>

        <div className="project-description">
          <p>
            This is the complete sample project. As of now, this does not have
            any animations. I created this project to try out Astro and to
            experiment with new CSS properties & structure. &nbsp;
            <a href="https://space-tourism-trapti.netlify.app">Live site</a>
            &nbsp;
            <a href="https://github.com/tripti1410/space-tourism">Github</a>
          </p>
          <p className="tech">
            <span> Tech: </span>
            Astro, CSS
          </p>
        </div>
      </div>
      <div className="home-work-container__project">
        <div className="project-preview">
          <iframe
            src="https://player.vimeo.com/video/714005277?h=20e99bbd17&autoplay=1&loop=1&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="project-description">
          <p>
            Line animation on scroll with graphics between them. This was part
            of the codesandbox GSAP challenge. It's a replica of a famous{" "}
            <a href="https://www.lemonade.com/giveback-2019">lemonade</a>.
            &nbsp;
            <a href="https://b2mg4r.csb.app">Live site</a>
          </p>
          <p className="tech">
            <span> Tech: </span>
            SVG, Greensock
          </p>
        </div>
      </div>

      <div className="home-work-container__project">
        <div className="project-preview">
          <iframe
            src="https://player.vimeo.com/video/714007197?h=c17a384189&autoplay=1&loop=1&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="project-description">
          <p>
            Apple’s screen saver “hello” looks pretty. I recreated this in
            Codepen, they featured it in their spark collection. &nbsp;
            <a href="https://codepen.io/tripti1410/pen/pordWpZ">Codepen</a>
          </p>
          <p className="tech">
            <span> Tech: </span>
            SVG, Greensock
          </p>
        </div>
      </div>
      <div className="home-work-container__project">
        <div className="project-preview">
          <iframe
            src="https://player.vimeo.com/video/711617783?h=8828a5904d&autoplay=1&loop=1&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-description">
          <p>
            This is the Flip animation using GreenSock’s flip plugin I did this
            as part of the Codepen challenge. The community loved it.&nbsp;
            <a href="https://codepen.io/tripti1410/pen/jOGZPbp">Codepen</a>
          </p>
          <p className="tech">
            <span> Tech: </span>
            Greensock, FLIP plugin
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
