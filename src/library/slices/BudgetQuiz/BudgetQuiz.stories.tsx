import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BudgetQuiz from './BudgetQuiz';
import { ExampleBudgetQuizProps } from './BudgetQuiz.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof BudgetQuiz> = {
  title: 'Library/Slices/Budget Quiz',
  component: BudgetQuiz,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BudgetQuiz>;

export const ExampleBudgetQuiz: Story = {
  args: ExampleBudgetQuizProps,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <BudgetQuiz {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
