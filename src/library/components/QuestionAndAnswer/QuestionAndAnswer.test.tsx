import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import QuestionAndAnswer from './QuestionAndAnswer';
import { AnswerProps, QuestionAndAnswerProps } from './QuestionAndAnswer.types';
import { axe } from 'jest-axe';

describe('Question And Answer Component', () => {
  let props: QuestionAndAnswerProps;
  const answers: AnswerProps[] = [
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
  ];

  beforeEach(() => {
    props = {
      questionText: 'What is your favourite colour',
      hintText: 'Choose a colour from the options below',
      category: 'Optional category name here',
      icon: 'cash',
      answers: answers,
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

  it.each(answers)(
    'should show the $answerText answer summary when submitted',
    ({ answerText, answerSummary, correctAnswer }) => {
      const { getByTestId, getByRole, getByLabelText, getByTitle } = renderComponent();

      const component = getByTestId('QuestionAndAnswer');
      const submit = getByRole('button');
      const red = getByLabelText(answerText);

      fireEvent.click(submit);

      expect(component).toHaveTextContent('Please select an option');

      fireEvent.click(red);
      fireEvent.click(submit);

      expect(component).not.toHaveTextContent('Please select an option');
      expect(component).toHaveTextContent(answerSummary);
      expect(getByTitle(correctAnswer ? 'Correct' : 'Incorrect')).toBeInTheDocument();
    }
  );

  it('should have no accessibility violations', async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
