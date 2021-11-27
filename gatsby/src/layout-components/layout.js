import React from "react"
import Header from "../layout-components/header/header"
import Footer from "../layout-components/footer"
import SocialLinks from "../components/social-links"
import SkipLinks from "./skip-links/skip-links"

import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Trapti Rahangdale - Freelance Frontend Engineer</title>
        <meta
          name="description"
          content="Freelance Frontend Web UI/UX Engineer - India"
        />
        <meta
          name="keywords"
          content="freelancer, frontend Engineer, UI Engineer, HTML, CSS, SVG, UI, UX, accessibility, javascript, greensock, illustrator, react, vue, animations, India"
        />
        <meta name="language" content="en" />
      </Helmet>
      <SkipLinks />
      <Header />
      {children}
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default Layout
