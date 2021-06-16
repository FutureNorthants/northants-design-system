
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import NewsArticleFeaturedBlock from "./NewsArticleFeaturedBlock";
import { NewsArticleFeaturedBlockProps } from "./NewsArticleFeaturedBlock.types";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { newsArticleData } from './NewsArticleFeaturedBlockData';

export default {
    title: 'Library/Structure/News Article Featured Block',
    component: NewsArticleFeaturedBlock,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};


const Template: Story<NewsArticleFeaturedBlockProps> = (args) => <MaxWidthContainer><NewsArticleFeaturedBlock {...args} /></MaxWidthContainer>;

export const ExampleNewsArticleFeaturedBlock = Template.bind({});    
ExampleNewsArticleFeaturedBlock.args = {
  articles: newsArticleData.articles,
  viewAllLink: "/"
};

export const ExampleNoNewsArticleFeaturedBlock = Template.bind({});    
ExampleNoNewsArticleFeaturedBlock.args = {
  articles: [],
};

export const ExampleNoTitleOrButton = Template.bind({});    
ExampleNoTitleOrButton.args = {
  articles: newsArticleData.articles,
  withoutTitle: true,
  viewAllLink: ""
};


export const Example2Articles = Template.bind({});    
Example2Articles.args = {
  articles: newsArticleData.articles.slice(0, 2)
};

export const Example1Article = Template.bind({});    
Example1Article.args = {
  articles: newsArticleData.articles.slice(0, 1)
};

