import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { NewsArticle, NewsArticleProps } from './NewsArticle';

export default {
  title: 'Page Examples/News Article example',
  component: NewsArticle,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<NewsArticleProps> = (args) => <NewsArticle {...args} />;

export const ExampleNewsArticle = Template.bind({});

export const ExampleNewsArticleWithImage = Template.bind({});
ExampleNewsArticleWithImage.args = {
  withImage:
    'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/1440/810/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
  imagePlaceholder:
    'https://core-cms.bfi.org.uk/sites/default/files/styles/responsive/public/144/81/1/2020-08/bfi-film-academy-2020-recruitment-campaign-watershed-two-girls-behind-camera.jpeg',
};

export const ExampleNewsArticleThatIsOld = Template.bind({});
ExampleNewsArticleThatIsOld.args = {
  isOld: true,
};
