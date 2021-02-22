import React from "react";
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { GDS_theme, north_theme, west_theme, lb_theme_north } from '../src/themes/theme_generator';
import { createGlobalStyle } from 'styled-components';
import { cssReset }  from '../src/themes/reset.css';

const GlobalStyle = createGlobalStyle`
  ${cssReset}
`;


addDecorator(withThemes(ThemeProvider, [north_theme, west_theme, GDS_theme, lb_theme_north]));
addDecorator(style => <><GlobalStyle />{style()}</>);

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
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
        value: '#05873A',
      },
      {
        name: 'west',
        value: '#386193',
      },
      {
        name: 'london_bridge',
        value: '#000000',
      },
    ]
  }
}