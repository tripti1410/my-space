import React from "react"
import "./work-section.css"
import spaceTourismImg from "$src/images/space-tourism.jpg"

const WorkSection = () => {
  return (
    <section className="home-work-container">
      <h2 className="section-title">work I do for clients; and lab:</h2>
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
            I built the website for{" "}
            <a href="https://lifescicommunications.com">
              LifeSci Communications
            </a>
            . It has a complex, modern layout, and every page has different line
            animations on scroll.{" "}
            <a href="/project/lifesci-project-details/">Project details.</a>
          </p>
          <p className="tech">
            <span> Tech: </span>
            WordPress, Elementor, Greensock
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
            At <a href="https://www.equivalent.design">Equivalent Design</a>,
            I’m responsible for creating all the accessible SVG animations. I
            clean the SVGs, make them performant & WCAG compliant. e.g., in the
            animation for Sam, the guide dog above, I added support for{" "}
            <strong>
              reduced motion, light & dark mode, high contrast mode, reader app,
              etc.
            </strong>
          </p>
          <p className="tech">
            <span> Tech: </span>
            SVG, Greensock
          </p>
        </div>
      </div>
      <div className="home-work-container__project">
        <div className="project-preview">
          <img src={spaceTourismImg} alt="website homepage design" />
        </div>

        <div className="project-description">
          <p>
            I wanted to get familiar with{" "}
            <a href="https://astro.build" target="_blank">
              Astro
            </a>
            . So I used Frontend Mentor’s
            <a
              href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
              target="_blank"
            >
              {" "}
              challenge
            </a>{" "}
            design and created this in Plain HTML, CSS and JavaScript.
          </p>
          <p>
            <a href="https://space-tourism-trapti.netlify.app" target="_blank">
              Demo
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/tripti1410/space-tourism"
              target="_blank"
            >
              Source code
            </a>
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
            of the CodeSandbox GSAP challenge. It's a replica of the famous{" "}
            <a href="https://www.lemonade.com/giveback-2019" target="_blank">
              Lemonade website
            </a>
            .
          </p>
          <p>
            <a href="https://b2mg4r.csb.app" target="_blank">
              Demo
            </a>{" "}
            /{" "}
            <a href="https://codesandbox.io/s/b2mg4r" target="_blank">
              Source code
            </a>
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
            I recreated in CodePen Apple’s beautiful "hello" screen saver.
            CodePen featured it in their Spark collection.
          </p>
          <p>
            <a
              href="https://codepen.io/tripti1410/full/pordWpZ"
              target="_blank"
            >
              Demo
            </a>{" "}
            /{" "}
            <a href="https://codepen.io/tripti1410/pen/pordWpZ" target="_blank">
              Source code
            </a>
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
            I used GreenSock’s{" "}
            <a
              href="https://greensock.com/docs/v3/Plugins/Flip/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FLIP plugin
            </a>{" "}
            to create this animation as part of the CodePen challenge. The
            community loved it.
          </p>
          <p>
            <a href="https://codepen.io/tripti1410/full/jOGZPbp">Demo</a> /{" "}
            <a href="https://codepen.io/tripti1410/pen/jOGZPbp">Source code</a>
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
