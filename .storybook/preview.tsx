import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../src/themes/theme_generator';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { GlobalStyleReset } from '../src/themes/GlobalStyleReset';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'north',
          value: '#017F34',
        },
        {
          name: 'west',
          value: '#386193',
        },
        {
          name: 'london_bridge',
          value: '#000000',
        },
      ],
    },
  },
};

export default preview;

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'north_theme',
    toolbar: {
      icon: 'circlehollow',
      items: ['north_theme', 'west_theme', 'lb_theme_north', 'lb_theme_west'],
      title: 'Theme',
    },
  },
};

// Function to obtain the intended theme
const getTheme = (themeName) => {
  return themes[themeName];
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [
  withThemeProvider,
  (style) => (
    <>
      <GlobalStyleReset />
      {style()}
    </>
  ),
];
