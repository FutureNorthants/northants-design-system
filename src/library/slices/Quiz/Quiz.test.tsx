import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import Quiz from './Quiz';
import { QuizProps } from './Quiz.types';
import { ExampleQuizProps } from './Quiz.storydata';
import { axe } from 'jest-axe';

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

  it('should navigate to the next question and show the summary', () => {
    const { getByRole, getByTestId, getByLabelText } = renderComponent();

    const component = getByTestId('Quiz');

    expect(component).toHaveTextContent(props.questions[0].questionText);
    expect(component).toHaveTextContent(props.questions[0].answers[0].answerText);
    expect(component).toHaveTextContent(props.questions[0].answers[1].answerText);
    expect(component).toHaveTextContent(props.questions[0].answers[2].answerText);

    fireEvent.click(getByLabelText(props.questions[0].answers[0].answerText));
    fireEvent.click(getByRole('button', { name: 'Submit' }));

    expect(component).toHaveTextContent(props.questions[0].answers[0].answerSummary);

    fireEvent.click(getByRole('button', { name: 'Next' }));

    expect(component).not.toHaveTextContent(props.questions[0].questionText);

    expect(component).toHaveTextContent(props.questions[1].questionText);
    expect(component).toHaveTextContent(props.questions[1].answers[0].answerText);
    expect(component).toHaveTextContent(props.questions[1].answers[1].answerText);
    expect(component).toHaveTextContent(props.questions[1].answers[2].answerText);

    fireEvent.click(getByLabelText(props.questions[1].answers[0].answerText));
    fireEvent.click(getByRole('button', { name: 'Submit' }));

    expect(component).toHaveTextContent(props.questions[1].answers[0].answerSummary);

    fireEvent.click(getByRole('button', { name: 'Show results' }));

    expect(component).not.toHaveTextContent(props.questions[1].questionText);

    expect(component).toHaveTextContent('You got 1 out of 2');

    fireEvent.click(getByRole('button', { name: 'Try again' }));

    expect(component).toHaveTextContent(props.questions[0].questionText);
  });

  it('should have no accessibility violations', async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
