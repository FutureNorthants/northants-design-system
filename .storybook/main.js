module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@react-theming/storybook-addon",     // https://github.com/react-theming/storybook-addon
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",              // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    '@storybook/addon-jest'              // https://github.com/storybookjs/storybook/tree/next/addons/jest
    // '@storybook/addon-links'              // https://github.com/storybookjs/storybook/tree/master/addons/links
  ]
}