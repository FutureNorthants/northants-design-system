import { StorybookConfig } from '@storybook/react-webpack5';

const path = require('path');
const config: StorybookConfig = {
  features: {
    storyStoreV7: true,
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    // https://storybook.js.org/addons/@etchteam/storybook-addon-status/
    '@etchteam/storybook-addon-status',
    '@storybook/addon-mdx-gfm',
  ],

  env: (config) => ({
    ...config,
    NEXT_PUBLIC_POSTCODE_SEARCH_API_URL: 'https://api.westnorthants.digital/address-search-test/postcode/',
  }),

  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          [
            'react-app',
            {
              flow: false,
              typescript: true,
            },
          ],
          ['@babel/preset-typescript'],
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              loose: true,
              shippedProposals: true,
              corejs: {
                version: 3,
              },
              targets: {
                ie: '11',
              },
            },
          ],
        ],
      },
    });
    config.resolve?.extensions?.push('.ts', '.tsx');
    return config;
  },

  docs: {
    autodocs: true,
  },
};

export default config;
