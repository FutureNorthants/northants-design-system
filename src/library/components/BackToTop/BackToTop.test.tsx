import React from 'react';
import { render } from '@testing-library/react';
import BackToTop from './BackToTop';
import { BackToTopProps } from './BackToTop.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Component', () => {
  let props: BackToTopProps;

  beforeEach(() => {
    props = {
      isActive: true,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ul>
          {[...Array(100)].map((row, rowIndex) => (
            <li key={rowIndex}>List item {rowIndex + 1}</li>
          ))}
        </ul>
        <BackToTop {...props} />
      </ThemeProvider>
    );

  it('should render the back to top button correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BackToTop');
    const button = getByTestId('BackToTopButton');

    expect(component).toBeVisible();
    expect(button).not.toBeVisible();

    // Button doesn't show until you scroll below 300px
    expect(button).toHaveStyle('display: none;');
  });
});
