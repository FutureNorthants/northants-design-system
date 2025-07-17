import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import NewsArticleListHeader from './NewsArticleListHeader';
import { NewsArticleListHeaderProps } from './NewsArticleListHeader.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

import { newsArticleData } from '../../structure/NewsArticleList/NewsArticleData';
import sortByOptions from './../../components/SortBy/SortByData';

export default {
  title: 'Library/Structure/News Article List Header',
  component: NewsArticleListHeader,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<NewsArticleListHeaderProps> = (args) => (
  <SBPadding>
    <NewsArticleListHeader {...args} />
  </SBPadding>
);

export const ExampleNewsArticleListHeader = Template.bind({});
ExampleNewsArticleListHeader.args = {
  totalResults: newsArticleData.totalResults,
  sortBy: newsArticleData.sortBy,
  sortByOptions: sortByOptions,
};

export const ExampleNewsArticleListHeader1Result = Template.bind({});
ExampleNewsArticleListHeader1Result.args = {
  totalResults: 1,
  sortBy: newsArticleData.sortBy,
  sortByOptions: sortByOptions,
};
