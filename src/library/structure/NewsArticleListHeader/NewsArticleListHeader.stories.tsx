import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NewsArticleListHeader from './NewsArticleListHeader';
import { newsArticleData } from '../../structure/NewsArticleList/NewsArticleData';
import sortByOptions from './../../components/SortBy/SortByData';

const meta: Meta<typeof NewsArticleListHeader> = {
  title: 'Library/Structure/News Article List Header',
  component: NewsArticleListHeader,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsArticleListHeader>;

export const ExampleNewsArticleListHeader: Story = {
  args: {
    totalResults: newsArticleData.totalResults,
    sortBy: newsArticleData.sortBy,
    sortByOptions: sortByOptions,
  },
};

export const ExampleNewsArticleListHeader1Result: Story = {
  args: {
    totalResults: 1,
    sortBy: newsArticleData.sortBy,
    sortByOptions: sortByOptions,
  },
};
