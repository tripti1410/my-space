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
      trackingId: "210177523",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Avoids sending pageview hits from custom paths
      exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      //pageTransitionDelay: 0,
      // Enables Google Optimize using your container Id
      //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Any additional optional fields
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "iamtrapti.com",
    },
  }
],
}
