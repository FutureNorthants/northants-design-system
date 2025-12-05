import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import QuestionAndAnswer from './QuestionAndAnswer';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof QuestionAndAnswer> = {
  title: 'Library/Components/QuestionAndAnswer',
  component: QuestionAndAnswer,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionAndAnswer>;

export const ExampleQuestionAndAnswer: Story = {
  args: {
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
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <QuestionAndAnswer {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleQuestionAndAnswerNoCategory: Story = {
  ...ExampleQuestionAndAnswer,
  args: {
    ...ExampleQuestionAndAnswer.args,
    ...{ category: null },
  },
};
