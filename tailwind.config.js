module.exports = {
  theme: {
    // TODO: Decide if pre-packaged tailwind components should be used.
    // To replace the entire pre-configured tailwind theme, remove this
    // `extend` key and move all entries directly under the `theme` key.
    extend: {
      // TODO: If necessary, adjust breakpoints.
      // https://tailwindcss.com/docs/breakpoints

      // TODO: If necessary, adjust spacing.
      // https://tailwindcss.com/docs/customizing-spacing
      colors: {
        // TODO: Adjust color variables to match the project style guide.
        // https://tailwindcss.com/docs/customizing-colors
        amazee: {
          yellow: '#ffcc4f',
          gray: '#64675E',
          dark: '#2c3539',
          blue: '#60839b',
        },
      },
    },
  },
  variants: {
    // TODO: Configure variants to control pseudo classes.
    // https://tailwindcss.com/docs/pseudo-class-variants
    padding: ['first', 'last', 'responsive'],
    margin: ['first', 'last', 'responsive'],
    borderWidth: ['first', 'last'],
  },
  plugins: [
    // TODO: Add custom plugins to implement dynamic utilities or components.
    // https://tailwindcss.com/docs/extracting-components#writing-a-component-plugin
    // https://tailwindcss.com/docs/adding-new-utilities#using-a-plugin
  ],
};
