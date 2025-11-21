import { QuizProps } from './Quiz.types';

export const ExampleQuizProps: QuizProps = {
  title: 'An example quiz title',
  questions: [
    {
      questionText: 'What is your favourite colour?',
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
    },
    {
      questionText: 'What is your quest?',
      hintText: 'Choose a colour from the options below',
      category: 'Location based question',
      icon: 'address',
      answers: [
        {
          answerText: 'To find the best coffee in town',
          correctAnswer: true,
          answerSummary: 'Yes, well done that is correct.',
        },
        {
          answerText: 'To find a parking space',
          correctAnswer: false,
          answerSummary: 'Not quite, it is not this answer.',
        },
        {
          answerText: 'To walk along the river',
          correctAnswer: false,
          answerSummary: 'Not quite, you are not far off.',
        },
      ],
    },
  ],
};
