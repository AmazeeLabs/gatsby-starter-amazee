module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  node: { fs: 'empty', child_process: 'empty', readline: 'empty' },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        // Try to exclude everything that should not contain jsx.
        // Adjust if errors pop up.
        exclude: [/node_modules\/(?!gatsby|react)/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/lib/featuresLoader',
          },
        ],
      },
    ],
  },
};
