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
  }],
}
