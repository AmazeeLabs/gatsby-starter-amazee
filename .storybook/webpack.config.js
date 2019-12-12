module.exports = ({ config, mode }) => {

  // Write as *.tsx or *.mdx files.
  config.module.rules.push({
    test: /\.stories\.(tsx|mdx)?$/,
    loaders: [
      require.resolve('@storybook/source-loader'),
      require.resolve("react-docgen-typescript-loader"),
    ],
    enforce: 'pre',
  });

  // Transpile typescript with babel.
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ]
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  // Make sure *.module.css files are processed with PostCSS.
  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        }
      },
      'postcss-loader',
    ]
  });

  // Exclude *.module.css files from the standard CSS processor.
  config.module.rules[2].exclude = [/\.module\.css$/];

  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // Use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader");

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env"),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"]

  return config;
};
