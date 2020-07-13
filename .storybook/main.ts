import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const stories = [
  './additional-stories/*.stories.tsx',
  '../src/**/*.stories.tsx',
];

export const addons = [
  // We don't use @storybook/preset-typescript. See webpack config below.
  '@storybook/addon-actions',
  '@storybook/addon-viewport',
  '@storybook/addon-a11y',
  '@storybook/addon-knobs',
  '@storybook/addon-docs',
];

export const webpackFinal = async (
  config: { [key: string]: any },
  { configType }: { configType: string },
) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // We modify rules based on Storybook and Gatsby docs. We don't use
  // @storybook/preset-typescript, but instead use ts-loader to work with
  // Gatsby. We also use the webpack plugin, tsconfig-paths-webpack-plugin, in
  // in order to support TypeScript path mappings added to tsconfig.
  // https://storybook.js.org/docs/configurations/typescript-config/#setting-up-typescript-with-ts-loader
  // https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
  // https://github.com/dividab/tsconfig-paths-webpack-plugin

  // Modify existing rules.
  config.module.rules = (config.module.rules as any[]).map((rule) => {
    switch (`${rule.test}`) {
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

  // Use babel-plugin-remove-graphql-queries to remove static queries
  // from components when rendering in storybook. This only works if you:
  // - build Gatsby before starting Storybook so that the plugin can
  //   replace the queries with data stored in the "public" directory
  // - start Storybook with NODE_ENV=production. (See Gatsby docs.)
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      plugins: [require.resolve('babel-plugin-remove-graphql-queries')],
    },
  });

  // Transpile Typescript using ts-loader.
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
      // FIXME: Re-enable addon docs when terser plugin problems are resolved.
      // https://github.com/storybookjs/storybook/issues/7743
      // {
      //   loader: require.resolve('react-docgen-typescript-loader'),
      // },
    ],
  });

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // Use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
  ];

  // Add support for tsconfig path mapping.
  if (!config.resolve.plugins) {
    config.resolve.plugins = [];
  }
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  // Find modules whose files end with .ts and .tsx.
  // https://storybook.js.org/docs/configurations/typescript-config/
  config.resolve.extensions.push('.ts', '.tsx');

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  // Return the altered config
  return config;
};
