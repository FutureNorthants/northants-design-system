import React from 'react';
import { render } from '@testing-library/react';
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

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BudgetGame');

    expect(component).toHaveTextContent('85%');
  });
});
