module.exports = {
  siteMetadata: {
    title: `botdobom`,
    description: `tecnologia acessível`,
    siteUrl: `https://quebradev.com.br/`,
    author: `@eptaccio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-landing-page-starter`,
        short_name: `landing`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/logo.svg` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sitemap`
  ]
}
