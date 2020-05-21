module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt7ff57dfe052c20db',
        'delivery_token':'csb1dd7764459c7e0d76ffd9b7',
        'environment':'development',
        // Optional: expediteBuild set this to either true or false
        'expediteBuild': true,
        // Optional: Specify true if you want to generate custom schema
        'enableSchemaGeneration' : true,
        // Optional: Specify a different prefix for types. This is useful in cases where you have multiple instances of the plugin to be connected to different stacks.
        'type_prefix': `Contentstack`, // (default)
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
