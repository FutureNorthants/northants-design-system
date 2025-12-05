import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
import { BudgetGamePageExample } from './BudgetGameExample';

const meta: Meta<typeof BudgetGamePageExample> = {
  title: 'Page Examples/Budget Game Example',
  component: BudgetGamePageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BudgetGameExamplePage: Story = {
  args: {},
  parameters: {
    pageLayout: 'page',
  },
};
