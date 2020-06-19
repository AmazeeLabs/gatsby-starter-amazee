// https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the components in your project.
  content: ['./src/components/**/!(*.stories).tsx'],

  // Include any special characters used in Tailwind CSS class names.
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const isProduction =
  process.env.NODE_ENV === 'production' &&
  // We run storybook scripts with the NODE_ENV=production prefix in order to
  // get the babel-plugin-remove-graphql-queries to work properly. So we have to
  // ensure that we aren't running a storybook script when checking NODE_ENV.
  process.argv[1].indexOf('storybook') === -1;

module.exports = {
  plugins: [
    // Transform @import rules by inlining content.
    require('postcss-import'),
    // Automatic prefixing and browser compatibility.
    require('postcss-preset-env')({ stage: 0 }),
    // Allow Sass-style nested rulesets.
    require('postcss-nested'),
    // Apply tailwind features.
    require('tailwindcss'),
    // On production, purge all selectors not used in our codebase. This MUST be
    // done before stripping "purgecss start ignore" CSS comments.
    ...(isProduction ? [purgecss] : []),
    // Strip CSS comments.
    require('postcss-discard-comments'),
    // Add vendor prefixes.
    require('autoprefixer'),
  ],
};
