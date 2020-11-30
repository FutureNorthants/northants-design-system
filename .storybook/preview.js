import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import GDSTheme from '../src/themes/theme_gds';
import NorthTheme from '../src/themes/theme_north';
import WestTheme from '../src/themes/theme_west';

addDecorator(withThemes(ThemeProvider, [GDSTheme, NorthTheme, WestTheme]));

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}