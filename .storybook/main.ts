import { StorybookConfig } from '@storybook/react-webpack5';

const path = require('path');
const config: StorybookConfig = {
  features: {},

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    // https://storybook.js.org/addons/@etchteam/storybook-addon-status/
    '@etchteam/storybook-addon-status',
    '@storybook/addon-webpack5-compiler-swc',
  ],

  env: (config) => ({
    ...config,
    NEXT_PUBLIC_POSTCODE_SEARCH_API_URL: 'https://api.westnorthants.digital/address-search-test/postcode/',
    NEXT_PUBLIC_BIN_FINDER_API_URL: 'https://api.westnorthants.digital/openapi/v1/unified-waste-collections/',
  }),

  docs: {
    autodocs: true,
  },
};

export default config;
