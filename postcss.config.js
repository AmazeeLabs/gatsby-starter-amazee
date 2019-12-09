module.exports = {
  plugins: [
    // Automatic prefixing and browser compatibility.
    require(`postcss-preset-env`)({ stage: 0 }),
    // Include tailwind base styles.
    require('tailwindcss')('tailwind.config.js'),
    // Pure all selectors not used in the src/ folder.
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.tsx'],
      whitelist: ['body']
    }),
    // Get rid of comments.
    require('postcss-discard-comments'),
  ],
};
