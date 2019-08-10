import React from "react";
import Header from "../layout-components/header"
import Footer from "../layout-components/footer"
import SocialLinks from "../components/social-links"

import { Helmet } from "react-helmet"

const Layout = ({children}) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Trapti Rahangdale - Frontend Engineer</title>
        <meta name="description" content="Frontend UI Developer - India" />
        <meta
          name="keywords"
          content="frontend web developer, UI developer, HTML, CSS, SVG, UI, UX, a11y, javascript, react, animations, India"
        />
        <meta name="language" content="en" />
      </Helmet>
      <Header />
      {children}
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default Layout;