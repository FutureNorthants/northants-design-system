import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import BudgetQuiz from './BudgetQuiz';
import { BudgetQuizProps } from './BudgetQuiz.types';
import { ExampleBudgetQuizProps } from './BudgetQuiz.storydata';

describe('Budget Quiz Component', () => {
  let props: BudgetQuizProps;

  beforeEach(() => {
    props = ExampleBudgetQuizProps;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <BudgetQuiz {...props} />
      </ThemeProvider>
    );

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('BudgetQuiz');

    expect(component).toHaveTextContent('85%');
  });
});
