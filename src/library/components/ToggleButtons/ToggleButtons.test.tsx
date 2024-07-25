import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import ToggleButtons from './ToggleButtons';
import { ToggleButtonsProps } from './ToggleButtons.types';

describe('ToggleButtons Component', () => {
  let props: ToggleButtonsProps;

  beforeEach(() => {
    props = {
      buttons: [
        {
          title: 'Service results',
          onClick: () => {},
        },
        {
          title: 'News results',
          onClick: () => {},
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <ToggleButtons {...props} />
      </ThemeProvider>
    );

  it('should renders toggle buttons correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('ToggleButtons');

    expect(component).toHaveTextContent('Service results');
    expect(component).toHaveTextContent('News results');
  });
});
