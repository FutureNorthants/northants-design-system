import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import LocationLookup from './LocationLookup';
import { LocationLookupProps } from './LocationLookup.types';

describe('Location Lookup Component', () => {
  let props: LocationLookupProps;

  beforeEach(() => {
    props = {
      title: 'Location lookup',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <LocationLookup {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('LocationLookup');

    expect(component).toHaveTextContent('Location lookup');
  });
});
