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
    '@storybook/addon-a11y',
    // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    // https://storybook.js.org/addons/@etchteam/storybook-addon-status/
    '@etchteam/storybook-addon-status',
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-docs'
  ],

  env: (config) => ({
    ...config,
    NEXT_PUBLIC_POSTCODE_SEARCH_API_URL: 'https://api.westnorthants.digital/address-search-test/postcode/',
    // Test recaptcha ID: https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha.-what-should-i-do
    NEXT_PUBLIC_RECAPTCHA_KEY: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    NEXT_PUBLIC_BIN_FINDER_API_URL: 'https://api.westnorthants.digital/openapi/v1/unified-waste-collections/',
  }),

  docs: {},
};

export default config;
