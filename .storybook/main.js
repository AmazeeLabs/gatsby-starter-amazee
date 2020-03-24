const path = require('path');

module.exports = {
  stories: ['./Home.stories.tsx', '../src/**/*.stories.tsx'],
  addons: [
    // We don't use @storybook/preset-typescript. See webpack config below.
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // We modify rules based on Storybook and Gatsby docs. We don't use
    // @storybook/preset-typescript, but instead use babel-loader to work with
    // Gatsby.
    // https://storybook.js.org/docs/configurations/typescript-config/#setting-up-typescript-with-babel-loader
    // https://www.gatsbyjs.org/docs/visual-testing-with-storybook/

    // Modify existing rules.
    config.module.rules = config.module.rules.map(rule => {
      switch (`${rule.test}`) {
        case '/\\.(mjs|jsx?)$/':
          // Add TypeScript to this rule.
          rule.test = /\.(mjs|jsx?|tsx?)$/;
          // Use babel-plugin-remove-graphql-queries to remove static queries
          // from components when rendering in storybook. (See Gatsby docs.)
          rule.use[0].options.plugins.push(
            require.resolve('babel-plugin-remove-graphql-queries')
          );
          // Add babel-preset-react-app. (See Storybook docs.)
          rule.use[0].options.presets.push([
            require.resolve('babel-preset-react-app'),
            { flow: false, typescript: true },
          ]);
          break;
        case '/\\.css$/':
          // Make sure CSS files are processed with PostCSS.
          // https://webpack.js.org/loaders/postcss-loader/#css-modules
          rule.use = [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: configType === 'DEVELOPMENT',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: { path: path.resolve(__dirname, '../') },
                sourceMap: configType === 'DEVELOPMENT',
              },
            },
          ];
          break;
      }
      return rule;
    });

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    // https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/gatsby/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env'),
            ],
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties'),
              require.resolve('babel-plugin-remove-graphql-queries'),
            ],
          },
        },
      ],
    });

    // Find modules whose files end with .ts and .tsx.
    // https://storybook.js.org/docs/configurations/typescript-config/
    config.resolve.extensions.push('.ts', '.tsx');

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    // Return the altered config
    return config;
  },
};
