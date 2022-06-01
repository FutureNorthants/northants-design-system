const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
    storyStoreV7: false,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y', // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    '@etchteam/storybook-addon-status', // https://storybook.js.org/addons/@etchteam/storybook-addon-status/
    '@storybook/addon-ie11',
  ],
  env: (config) => ({
    ...config,
    POSTCODE_SEARCH_API_URL: 'https://v2245houm0.execute-api.eu-west-2.amazonaws.com/dev/postcode/',
    CTAX_PARISH_API_URL_NORTH: 'https://v2245houm0.execute-api.eu-west-2.amazonaws.com/dev/north-parishes',
    CTAX_PARISH_API_URL_WEST: 'https://v2245houm0.execute-api.eu-west-2.amazonaws.com/dev/west-parishes',
  }),
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          ['@babel/preset-typescript'],
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              loose: true,
              shippedProposals: true,
              corejs: { version: 3 },
              targets: {
                ie: '11',
              },
            },
          ],
        ],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
