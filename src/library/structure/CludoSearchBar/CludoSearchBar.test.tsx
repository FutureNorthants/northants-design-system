import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import CludoSearchBar from './CludoSearchBar';
import { CludoSearchBarProps } from './CludoSearchBar.types';

describe('Cludo Search Bar Component', () => {
  let props: CludoSearchBarProps;

  beforeEach(() => {
    props = {
      customerId: 1234,
      engineId: 1234,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CludoSearchBar {...props} />
      </ThemeProvider>
    );

  it('should render search bar correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('CludoSearchBar');

    expect(component).toBeVisible();
  });
});
