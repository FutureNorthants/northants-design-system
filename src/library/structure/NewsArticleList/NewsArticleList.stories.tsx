import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import NewsArticleList from './NewsArticleList';
import { NewsArticleListProps } from './NewsArticleList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { newsArticleData } from './NewsArticleData';

export default {
  title: 'Library/Structure/News Article List',
  component: NewsArticleList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<NewsArticleListProps> = (args) => (
  <SBPadding>
    <NewsArticleList {...args} />
  </SBPadding>
);

export const ExampleNewsArticleList = Template.bind({});
ExampleNewsArticleList.args = {
  results: newsArticleData.results,
  sortBy: null,
};

export const ExampleNoNewsArticleList = Template.bind({});
ExampleNoNewsArticleList.args = {
  results: [],
  sortBy: null,
};
