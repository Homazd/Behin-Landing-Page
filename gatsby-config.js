/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Behin Landing Page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss",
{
  resolve: 'gatsby-plugin-react-svg',
  options: {
    rule: {
      include: /images/,
    },
  },
},
]
};