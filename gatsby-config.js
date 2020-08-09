const Colors = require('./src/data/colors.json')

module.exports = {
  siteMetadata: {
    title: `David Wheatley`,
    description: `David Wheatley is an front-end web designed specialising in React, located in West Sussex, UK.`,
    author: `@davwheat`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `David Wheatley`,
        short_name: `davwheat`,
        start_url: `/`,
        background_color: Colors.primaryRed,
        theme_color: Colors.primaryRed,
        display: `minimal-ui`,
        icon: `src/images/thinking-emoji.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
