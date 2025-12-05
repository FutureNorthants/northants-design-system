import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Quiz from './Quiz';
import { ExampleQuizProps } from './Quiz.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof Quiz> = {
  title: 'Library/Slices/Quiz',
  component: Quiz,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Quiz>;

export const ExampleQuiz: Story = {
  args: ExampleQuizProps,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <Quiz {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
