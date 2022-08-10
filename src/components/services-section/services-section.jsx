import "./services-section.css"
import React from "react"

const ServicesSection = () => {
  return (
    <section className="home-services-container stack">
      <h2 className="section-title">you can use my contribution to create:</h2>
      <div>
        <h3> Websites User Interfaces </h3>
        <p>
          With great attension to detail using{" "}
          <strong className="highlight">HTML</strong>,{" "}
          <strong className="highlight">CSS</strong>,{" "}
          <strong className="highlight">SVG</strong> and{" "}
          <strong className="highlight">JS</strong> I can convert your designs
          into accesiible, interactive engagging performant websites. Be it with
          <ul>
            <li>Static site generators like Astro, 11ty, Gatsby etc.</li>
            <li>
              Singe-page Apps and server rendered Multi-page Apps using
              libraries like <strong className="highlight">React</strong>,{" "}
              <strong className="highlight">Vue</strong> and server side
              templating languages
            </li>
            <li>Custom WordPress themes using ACF(Advanced Custom Fields).</li>
          </ul>
        </p>
      </div>

      <div>
        <h3> Animations using GSAP/ CSS</h3>
        <p>
          I can help you engage user to your websites. Tell a story using
          animations. I prefer Greensock as my prefereed library for animations
          it is rubust has many great plugins to create amamzing animations. If
          your preference is using CSS and plain JS to create animations I do
          that as well.
        </p>
      </div>

      <div class="flex-center">
        <h3 class="">sounds fun? let's chat!</h3>
        <a class="button clr-2" href="mailTo:hello@trapti.dev" target="_blank">
          ping me
        </a>
      </div>
    </section>
  )
}

export default ServicesSection
