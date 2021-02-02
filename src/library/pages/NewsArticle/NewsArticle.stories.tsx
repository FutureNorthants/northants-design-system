import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { NewsArticle, NewsArticleProps }  from "./NewsArticle";

export default {
  title: 'Page Examples/News Article example',
  component: NewsArticle,
} as Meta;

const Template: Story<NewsArticleProps> = (args) => <NewsArticle {...args} />;

export const ExampleNewsArticle = Template.bind({});    

export const ExampleNewsArticleWithImage = Template.bind({});    
ExampleNewsArticleWithImage.args = {
  withImage: "Image goes here"
}

export const ExampleNewsArticleThatIsOld = Template.bind({});    
ExampleNewsArticleThatIsOld.args = {
  isOld: true
}