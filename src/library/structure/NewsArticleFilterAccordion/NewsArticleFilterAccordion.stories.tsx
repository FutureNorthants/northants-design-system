import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NewsArticleFilterAccordion from './NewsArticleFilterAccordion';

const meta: Meta<typeof NewsArticleFilterAccordion> = {
  title: 'Library/Structure/News Article Filter Accordion',
  component: NewsArticleFilterAccordion,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsArticleFilterAccordion>;

export const ExampleNewsArticleFilterAccordion: Story = {
  args: {
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
  },
};
