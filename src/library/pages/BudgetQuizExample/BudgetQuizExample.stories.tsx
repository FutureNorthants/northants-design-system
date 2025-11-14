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
  args: {
    budgetServices: [
      {
        title: 'Bins, recycling and waste',
        summary: 'Weekly bin collections, recycling services, and waste management',
        icon: 'bins',
        min: 10,
        max: 20,
        value: 15,
        impacts: [
          {
            title: 'low',
            min: 10,
            max: 14,
            summary: 'The low impact summary text',
          },
          {
            title: 'medium',
            min: 15,
            max: 16,
            summary: 'The medium impact summary text',
          },
          {
            title: 'high',
            min: 17,
            max: 20,
            summary: 'The high impact summary text',
          },
        ],
      },
      {
        title: 'Roads and transport',
        summary: 'Road repairs, streetlights, traffic management, and public transport',
        icon: 'roads',
        min: 6,
        max: 14,
        value: 8,
        impacts: [
          {
            title: 'low',
            min: 6,
            max: 8,
            summary: 'The low impact summary text',
          },
          {
            title: 'medium',
            min: 9,
            max: 10,
            summary: 'The medium impact summary text',
          },
          {
            title: 'high',
            min: 11,
            max: 14,
            summary: 'The high impact summary text',
          },
        ],
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};
