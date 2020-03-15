// https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project.
  content: ['./src/**/*.tsx'],

  // Include any special characters used in Tailwind CSS class names.
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    // Transform @import rules by inlining content.
    require('postcss-import'),
    // Automatic prefixing and browser compatibility.
    require('postcss-preset-env')({ stage: 0 }),
    // Apply tailwind features.
    require('tailwindcss'),
    // On production, purge all selectors not used in the src/ folder. This MUST
    // be done before stripping "purgecss start ignore" CSS comments.
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    // Strip CSS comments.
    require('postcss-discard-comments'),
    // Add vendor prefixes.
    require('autoprefixer'),
  ],
};
