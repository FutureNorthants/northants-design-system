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
    "@storybook/addon-a11y",
    // 'storybook-addon-themes',     // https://github.com/tonai/storybook-addon-themes
    '@storybook/addon-jest'       // https://github.com/storybookjs/storybook/tree/next/addons/jest
  ]
}