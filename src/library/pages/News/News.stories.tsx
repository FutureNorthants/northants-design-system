import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { News, NewsProps } from './News';

export default {
  title: 'Page Examples/News landing page example',
  component: News,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<NewsProps> = (args) => <News {...args} />;

export const ExampleNewsArticleList = Template.bind({});
ExampleNewsArticleList.args = {
  hasResults: true,
};

export const ExampleNoNewsArticleList = Template.bind({});
ExampleNoNewsArticleList.args = {
  hasResults: false,
};
