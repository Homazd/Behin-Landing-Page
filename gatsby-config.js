/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://siz-tel.com",
    title: `Behin Landing Page`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-smoothscroll",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
  ],
};
