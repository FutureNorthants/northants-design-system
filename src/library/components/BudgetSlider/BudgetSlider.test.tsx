import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import BudgetSlider from './BudgetSlider';
import { BudgetSliderProps } from './BudgetSlider.types';

describe('BudgetSlider Component', () => {
  let props: BudgetSliderProps;

  beforeEach(() => {
    props = {
      title: 'Bins, recycling and waste',
      summary: 'Weekly bin collections, recycling services, and waste management',
      icon: 'bins',
      min: 10,
      max: 20,
      initialValue: 12,
      impacts: [
        {
          title: 'low',
          min: 10,
          max: 14,
          summary: 'The low impact summary text',
        },
        {
          title: 'medium',
          min: 15,
          max: 16,
          summary: 'The medium impact summary text',
        },
        {
          title: 'high',
          min: 17,
          max: 20,
          summary: 'The high impact summary text',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BudgetSlider {...props} />
      </ThemeProvider>
    );

  it('should render text correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('BudgetSlider');
    const heading = getByRole('heading');

    expect(component).toHaveTextContent('The low impact summary text');
    expect(heading).toHaveTextContent('Bins, recycling and waste');
    expect(component).toHaveTextContent('Weekly bin collections, recycling services, and waste management');
  });
});
