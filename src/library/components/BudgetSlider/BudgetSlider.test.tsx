import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import BudgetSlider from './BudgetSlider';
import { BudgetSliderProps, ImpactProps } from './BudgetSlider.types';
import { axe } from 'jest-axe';

describe('BudgetSlider Component', () => {
  let props: BudgetSliderProps;

  const impacts: ImpactProps[] = [
    {
      title: 'low',
      minimum: 10,
      maximum: 14,
      summary: 'The low impact summary text',
    },
    {
      title: 'medium',
      minimum: 15,
      maximum: 16,
      summary: 'The medium impact summary text',
    },
    {
      title: 'high',
      minimum: 17,
      maximum: 20,
      summary: 'The high impact summary text',
    },
  ];

  beforeEach(() => {
    props = {
      title: 'Bins, recycling and waste',
      summary: 'Weekly bin collections, recycling services, and waste management',
      icon: 'bins',
      minimum: 10,
      maximum: 20,
      initialValue: 12,
      impacts: impacts,
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

  it('should increase the percentage when plus is pressed', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('BudgetSlider');
    expect(component).toHaveTextContent('12%');

    const plusButton = getByRole('button', { name: 'Increase the Bins, recycling and waste value' });

    fireEvent.click(plusButton);

    expect(component).toHaveTextContent('13%');
  });

  it('should decrease the percentage when minus is pressed', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('BudgetSlider');
    expect(component).toHaveTextContent('12%');

    const minusButton = getByRole('button', { name: 'Lower the Bins, recycling and waste value' });

    fireEvent.click(minusButton);

    expect(component).toHaveTextContent('11%');
  });

  it('should not lower the percentage lower than the minimum', () => {
    props.initialValue = 10;

    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('BudgetSlider');
    expect(component).toHaveTextContent('10%');

    const minusButton = getByRole('button', { name: 'Lower the Bins, recycling and waste value' });

    fireEvent.click(minusButton);

    expect(component).toHaveTextContent('10%');
  });

  it('should not increase the percentage higher than the maximum', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('BudgetSlider');
    expect(component).toHaveTextContent('20%');

    const plusButton = getByRole('button', { name: 'Increase the Bins, recycling and waste value' });

    fireEvent.click(plusButton);

    expect(component).toHaveTextContent('20%');
  });

  it.each(impacts)('should show the $title impact summary text', ({ title, minimum, summary }) => {
    props.initialValue = minimum;

    const { getByTestId } = renderComponent();

    const component = getByTestId('BudgetSlider');

    expect(component).toHaveTextContent(title);
    expect(component).toHaveTextContent(summary);
  });

  it('should have no accessibility violations', async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
