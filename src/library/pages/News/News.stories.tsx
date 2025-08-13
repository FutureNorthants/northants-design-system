import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
import { News } from './News';

const meta: Meta<typeof News> = {
  title: 'Page Examples/News landing page example',
  component: News,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleNewsArticleList: Story = {
  args: {
    hasResults: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleNoNewsArticleList: Story = {
  args: {
    hasResults: false,
  },
  parameters: {
    pageLayout: 'page',
  },
};
