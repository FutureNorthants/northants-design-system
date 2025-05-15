import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import CludoSearch from './CludoSearch';
import { CludoSearchProps } from './CludoSearch.types';

describe('Cludo Search Component', () => {
  let props: CludoSearchProps;

  beforeEach(() => {
    props = {
      searchTerm: 'bar',
      customerId: 123,
      engineId: 1234,
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <CludoSearch {...props} />
      </ThemeProvider>
    );

  it('should render the component correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('CludoSearch');

    expect(component).toBeVisible();
  });
});
