import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NewsArticleList from './NewsArticleList';
import { newsArticleData } from './NewsArticleData';

const meta: Meta<typeof NewsArticleList> = {
  title: 'Library/Structure/News Article List',
  component: NewsArticleList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsArticleList>;

export const ExampleNewsArticleList: Story = {
  args: {
    results: newsArticleData.results,
    sortBy: undefined,
  },
};

export const ExampleNoNewsArticleList: Story = {
  args: {
    results: [],
    sortBy: undefined,
  },
};
