import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { themes } from '../src/themes/theme_generator';
import { createGlobalStyle } from 'styled-components';
import { cssReset } from '../src/themes/reset.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
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
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'north_theme',
    toolbar: {
      icon: 'circlehollow',
      items: ['north_theme', 'west_theme', 'lb_theme_north', 'lb_theme_west'],
      showName: true,
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

const GlobalStyle = createGlobalStyle`
  ${cssReset}
`;

export const decorators = [
  withThemeProvider,
  (style) => (
    <>
      <GlobalStyle />
      {style()}
    </>
  ),
];
