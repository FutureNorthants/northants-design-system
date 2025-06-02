import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import RecyclingInformation from './RecyclingInformation';
import { RecyclingInformationProps } from './RecyclingInformation.types';

describe('Recycling Information Slice', () => {
  let props: RecyclingInformationProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <RecyclingInformation {...props} />
      </ThemeProvider>
    );

  it('should be visible', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('RecyclingInformation');

    expect(component).toBeVisible();
  });

  it('should overwrite the clientId', () => {
    props.clientId = 'CustomClientId';

    const { getByTestId } = renderComponent();
    const innerComponent = getByTestId('RecyclingInfoInner');

    expect(innerComponent).toHaveAttribute('client-id', 'CustomClientId');
  });
});
