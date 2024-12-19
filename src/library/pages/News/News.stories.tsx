import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { News, NewsProps } from './News';

const meta: Meta<typeof News> = {
  title: 'Page Examples/News landing page example',
  component: News,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof News>;

export const ExampleNewsArticleList: Story = {
  args: {
    hasResults: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleNoNewsArticleList: Story = {
  args: {
    hasResults: false,
  },
  parameters: {
    pageLayout: 'page',
  },
};
