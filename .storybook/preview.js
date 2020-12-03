import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { GDS_theme, north_theme, west_theme } from '../src/themes/theme_generator';

addDecorator(withThemes(ThemeProvider, [GDS_theme, north_theme, west_theme]));

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}