import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import Quiz from './Quiz';
import { QuizProps } from './Quiz.types';
import { ExampleQuizProps } from './Quiz.storydata';

describe('Quiz Slice Component', () => {
  let props: QuizProps;

  beforeEach(() => {
    props = ExampleQuizProps;
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <Quiz {...props} />
      </ThemeProvider>
    );

  it('should render title text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('Quiz');

    expect(component).toHaveTextContent('An example quiz title');
  });
});
