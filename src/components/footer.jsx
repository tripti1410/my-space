import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer-link" href="/rss.xml">Articles RSS Feed</a>
      <p className="copyright-text"><strong>© 2019 - Today / Copyright Trapti Rahangdale. All rights reserved.</strong></p>
      <p className="site-info">
        This site is built with <a href="https://astro.build">Astro</a> and hosted on <a href="https://netlify.com">Netlify</a>. The source code is hosted on <a href="https://github.com">Github</a>.
    </p>
    </footer>
  )
}

export default Footer;