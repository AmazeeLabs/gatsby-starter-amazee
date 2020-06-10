<h1 align="center">
  <img alt="" src="https://www.gatsbyjs.org/monogram.svg" width="60" /><br />
  gatsby-i18n-create-page<br />
  Gatsby Plugin
</h1>

## Installation

To get started using this plugin, you can follow these steps:

1. Include the plugin in your Gatsby site

   Inside of the `gatsby-config.js` file of your site, include the plugin in the `plugins` array:

   ```javascript
   module.exports = {
     plugins: [
       // Your other gatsby plugins
       // ...
       {
         resolve: 'gatsby-i18n-create-page',
         options: {
           defaultLanguage: 'en',
           languageCodes: ['en', 'es', 'ar', 'zh'],
         },
       },
     ],
   };
   ```
