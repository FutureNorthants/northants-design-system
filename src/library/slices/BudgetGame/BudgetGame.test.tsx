import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import BudgetGame from './BudgetGame';
import { BudgetGameProps } from './BudgetGame.types';
import { ExampleBudgetGameProps } from './BudgetGame.storydata';

describe('Budget Game Component', () => {
  let props: BudgetGameProps;

  beforeEach(() => {
    props = ExampleBudgetGameProps;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BudgetGame {...props} />
      </ThemeProvider>
    );

  it('should render the text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BudgetGame');
    const total = getByTestId('BudgetTotal');

    expect(component).toHaveTextContent('85%');
    expect(total).toHaveTextContent('Total: 99%');
    expect(total).toHaveStyle(`color: ${west_theme.theme_vars.colours.negative}`);
  });

  it.each(ExampleBudgetGameProps.budgetServices)(
    'should show the $title budget service and increase and lower the total when clicked',
    ({ title, summary }) => {
      const { getByTestId, getByRole } = renderComponent();

      const component = getByTestId('BudgetGame');
      expect(component).toHaveTextContent('99%');

      expect(component).toHaveTextContent(title);
      expect(component).toHaveTextContent(summary);

      fireEvent.click(getByRole('button', { name: `Increase the ${title} value` }));
      expect(component).toHaveTextContent('100%');

      fireEvent.click(getByRole('button', { name: `Lower the ${title} value` }));
      expect(component).toHaveTextContent('99%');
    }
  );

  it('should show the target as green when the total matches the totalAllowed', () => {
    props.totalAllowed = 99;

    const { getByTestId } = renderComponent();

    const total = getByTestId('BudgetTotal');

    expect(total).toHaveTextContent('Total: 99%');
    expect(total).toHaveStyle(`color: ${west_theme.theme_vars.colours.positive}`);
  });
});
