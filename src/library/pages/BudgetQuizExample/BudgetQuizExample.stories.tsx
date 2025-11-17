import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
import { BudgetQuizPageExample } from './BudgetQuizExample';

const meta: Meta<typeof BudgetQuizPageExample> = {
  title: 'Page Examples/Budget Quiz Example',
  component: BudgetQuizPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BudgetQuizExamplePage: Story = {
  args: {},
  parameters: {
    pageLayout: 'page',
  },
};
