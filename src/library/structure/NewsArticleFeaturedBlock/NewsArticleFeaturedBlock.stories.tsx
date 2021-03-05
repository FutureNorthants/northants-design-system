
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import NewsArticleFeaturedBlock from "./NewsArticleFeaturedBlock";
import { NewsArticleFeaturedBlockProps } from "./NewsArticleFeaturedBlock.types";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { newsArticleData } from './NewsArticleFeaturedBlockData';

export default {
    title: 'Library/Structure/News Article Featured Block',
    component: NewsArticleFeaturedBlock
};


const Template: Story<NewsArticleFeaturedBlockProps> = (args) => <MaxWidthContainer><NewsArticleFeaturedBlock {...args} /></MaxWidthContainer>;

export const ExampleNewsArticleFeaturedBlock = Template.bind({});    
ExampleNewsArticleFeaturedBlock.args = {
  articles: newsArticleData.articles,
  viewAllLink: "View all news"
};

export const ExampleNoNewsArticleFeaturedBlock = Template.bind({});    
ExampleNoNewsArticleFeaturedBlock.args = {
  articles: [],
};

export const ExampleNoTitleOrButtonk = Template.bind({});    
ExampleNoTitleOrButtonk.args = {
  articles: newsArticleData.articles,
  withoutTitle: true
};

