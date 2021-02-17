
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import NewsArticleList from "./NewsArticleList";
import { NewsArticleListProps } from "./NewsArticleList.types";
import { SBPadding } from '../../../../.storybook/SBPadding';
import newsArticleData from './NewsArticleData';

export default {
    title: 'Library/Structure/News Article Losty',
    component: NewsArticleList
};


const Template: Story<NewsArticleListProps> = (args) => <SBPadding><NewsArticleList {...args} /></SBPadding>;

export const ExampleNewsArticleList = Template.bind({});    
ExampleNewsArticleList.args = {
  results: newsArticleData,
  // totalResults: 0,
  sortBy: null,
  // pageNumber: 1
};

export const ExampleNoNewsArticleList = Template.bind({});    
ExampleNoNewsArticleList.args = {
  results: [],
  // totalResults: 0,
  sortBy: null,
  // pageNumber: 1
};

