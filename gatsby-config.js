module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "PlantMunity",
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Arvo`,
            `Raleway`,
            `Anton`,
            `source serif pro\: ExtraLight 200 Italic, Light 300, Black 900, Black 900 italic`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
    }
  ],
};
