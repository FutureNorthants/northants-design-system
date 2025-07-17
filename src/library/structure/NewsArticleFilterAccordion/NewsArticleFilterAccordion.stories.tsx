import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import NewsArticleFilterAccordion from './NewsArticleFilterAccordion';
import { NewsArticleFilterAccordionProps } from './NewsArticleFilterAccordion.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/News Article Filter Accordion',
  component: NewsArticleFilterAccordion,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<NewsArticleFilterAccordionProps> = (args) => (
  <SBPadding>
    <NewsArticleFilterAccordion {...args} />
  </SBPadding>
);

export const ExampleNewsArticleFilterAccordion = Template.bind({});
ExampleNewsArticleFilterAccordion.args = {
  sections: [
    {
      title: 'Search articles',
      content: <p>hello</p>,
      isExpanded: true,
    },
    {
      title: 'Services',
      content: <p>hello</p>,
    },
    {
      title: 'Type of article',
      content: <p>hello</p>,
    },
    {
      title: 'Date',
      content: <p>hello</p>,
    },
  ],
};
