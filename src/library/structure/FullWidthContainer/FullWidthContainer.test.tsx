import React from 'react';
import { render } from '@testing-library/react';
import FullWidthContainer from './FullWidthContainer';
import { FullWidthContainerProps } from './FullWidthContainer.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Full Width Container', () => {
  it('should add background and padding', () => {
    const props: FullWidthContainerProps = {
      noBackground: false,
      noPadding: false,
    };

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <FullWidthContainer {...props} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();

    const fullWidthContainer = getByTestId('FullWidthContainer');
    expect(fullWidthContainer).toHaveStyle('padding: 50px 0');
    expect(fullWidthContainer).toHaveStyle(`background: ${west_theme.theme_vars.colours.grey_light}`);
  });

  it('should not have background and padding', () => {
    const props: FullWidthContainerProps = {
      noBackground: true,
      noPadding: true,
    };

    const renderComponent = () =>
      render(
        <ThemeProvider theme={west_theme}>
          <FullWidthContainer {...props} />
        </ThemeProvider>
      );
    const { getByTestId } = renderComponent();

    expect(getByTestId('FullWidthContainer')).toHaveStyle('padding: 0');
  });
});
