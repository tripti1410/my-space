/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`, 
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Noto Sans', 'Noto Serif']
      }
    }
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    },
  },
  `gatsby-transformer-remark`,
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'en'
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-148013867-1",
      head: true
    },
  }
],
}
