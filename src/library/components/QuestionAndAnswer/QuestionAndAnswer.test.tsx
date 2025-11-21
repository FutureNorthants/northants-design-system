import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import QuestionAndAnswer from './QuestionAndAnswer';
import { QuestionAndAnswerProps } from './QuestionAndAnswer.types';

describe('Question And Answer Component', () => {
  let props: QuestionAndAnswerProps;

  beforeEach(() => {
    props = {
      questionText: 'What is your favourite colour',
      hintText: 'Choose a colour from the options below',
      category: 'Optional category name here',
      icon: 'cash',
      answers: [
        {
          answerText: 'Red',
          correctAnswer: false,
          answerSummary: 'Not quite, its a colour close to this.',
        },
        {
          answerText: 'Blue',
          correctAnswer: false,
          answerSummary: 'Not quite, it is not this colour.',
        },
        {
          answerText: 'Orange',
          correctAnswer: true,
          answerSummary: 'Yes, well done that is correct.',
        },
      ],
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <QuestionAndAnswer {...props} />
      </ThemeProvider>
    );

  it('should render question text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('QuestionAndAnswer');

    expect(component).toHaveTextContent('What is your favourite colour');
    expect(component).toHaveTextContent('Red');
    expect(component).toHaveTextContent('Blue');
    expect(component).toHaveTextContent('Orange');
    expect(component).toHaveTextContent('Choose a colour from the options below');
    expect(component).toHaveTextContent('Optional category name here');
  });
});
