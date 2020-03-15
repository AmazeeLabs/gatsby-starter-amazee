module.exports = {
  plugins: [
    // Transform @import rules by inlining content.
    require('postcss-import'),
    // Automatic prefixing and browser compatibility.
    require('postcss-preset-env')({ stage: 0 }),
    // Apply tailwind features.
    require('tailwindcss')('tailwind.config.js'),
    // Strip CSS comments.
    require('postcss-discard-comments'),
    // Add vendor prefixes.
    require('autoprefixer'),
  ].concat(
    process.env.NODE_ENV === 'production'
      ? [
          // Purge all selectors not used in the src/ folder.
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.tsx'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ['body'],
          }),
        ]
      : []
  ),
};
