import React from "react"
import Layout from "../layout-components/layout"
import "./about.css"

const About = () => {
  return (
    <Layout>
      <div className="about-page">
        <h1 className="about-page-heading">ABOUT ME</h1>
        <p>
          I am a self taught Front-end Developer working since August 2015. I
          have developed SaaS web apps as well as bespoke websites. I am
          passionate about building a responsive, accessible, performant web for
          everyone. I love SVG, animations and CSS grid the most, and I am
          excited to build web interfaces of the future with these.
        </p>
        <h2 className="skills-title">Tools of the trade</h2>
        <ul className="skills-list">
          <li>HTML, CSS, Javascript, React, Redux, SVG’s</li>
          <li>
            CSS grid, Flexbox, SASS, BEM, CSS variables, CSS Modules, ITCSS,
            SMACCS
          </li>
          <li>Animations (CSS and with Greensock)</li>
          <li>Illustrator, Figma</li>
          <li>Typescript, Jest, Enzyme</li>
          <li>Webpack</li>
        </ul>
        <p>
          In May 2019 I took a break from &nbsp;
          <a
            rel="noopener noreferrer"
            href="https://www.quintype.com/"
            target="_blank"
          >
            Quintype
          </a>
          , having built react based front end web apps for 3+ years. I wished
          to upskill myself in SVG, animations and accessibility.
        </p>
        <p>
          I like to draft my ideas/designs at Codepen. I have created many &nbsp;
          <a
            rel="noopener noreferrer"
            href="https://codepen.io/tripti1410"
            target="_blank"
          >
            pens
          </a>
          of svg and animations, some of them got showcased under codepen’s
          picked category.
        </p>
        <p>
          When I learn and want to make a note I write it as blogpost. I have
          written a few blogs. One of them got published in Medium publication &nbsp;
          <a
            rel="noopener noreferrer"
            href="https://medium.com/statuscode/thinking-in-css-grid-48922b25ee69"
            target="_blank"
          >
            Statuscode
          </a>
          .
        </p>
        <p>
          I am looking for some interesting work. If you’d like to find out
          more, we can then set up a call to discuss how I can be of most value
          to your project. Send me an email with details at &nbsp;
          <a
            rel="noopener noreferrer"
            href="mailto:reach.trapti@gmail.com"
            target="_top"
          >
            reach.trapti@gmail.com
          </a>
          or DM on &nbsp;
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/imtraptir"
            target="_blank"
          >
            twitter
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default About
