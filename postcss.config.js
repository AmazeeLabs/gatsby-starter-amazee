module.exports = {
  plugins: [
    // Automatic prefixing and browser compatibility.
    require('postcss-preset-env')({ stage: 0 }),
    // Include tailwind base styles.
    require('tailwindcss')('tailwind.config.js'),
    // Get rid of comments.
    require('postcss-discard-comments'),
  ].concat(process.env.NODE_ENV === 'production' ? [
    // Purge all selectors not used in the src/ folder.
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.tsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      whitelist: ['body']
    }),
  ] : []),
};
