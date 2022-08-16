import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import NewsArticleFeaturedBlock from './NewsArticleFeaturedBlock';
import { NewsArticleFeaturedBlockProps } from './NewsArticleFeaturedBlock.types';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { NewsArticleData } from './NewsArticleFeaturedBlock.storydata';

export default {
  title: 'Library/Structure/News Article Featured Block',
  component: NewsArticleFeaturedBlock,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<NewsArticleFeaturedBlockProps> = (args) => (
  <MaxWidthContainer>
    <NewsArticleFeaturedBlock {...args} />
  </MaxWidthContainer>
);

export const ExampleNewsArticleFeaturedBlock = Template.bind({});
ExampleNewsArticleFeaturedBlock.args = {
  articles: NewsArticleData,
  viewAllLink: '/',
};

export const ExampleNoNewsArticleFeaturedBlock = Template.bind({});
ExampleNoNewsArticleFeaturedBlock.args = {
  articles: [],
};

export const ExampleNoTitleOrButton = Template.bind({});
ExampleNoTitleOrButton.args = {
  articles: NewsArticleData,
  withoutTitle: true,
  viewAllLink: '',
};

export const Example3Articles = Template.bind({});
Example3Articles.args = {
  articles: NewsArticleData.slice(0, 3),
};
export const Example2Articles = Template.bind({});
Example2Articles.args = {
  articles: NewsArticleData.slice(0, 2),
};

export const Example1Article = Template.bind({});
Example1Article.args = {
  articles: NewsArticleData.slice(0, 1),
};
