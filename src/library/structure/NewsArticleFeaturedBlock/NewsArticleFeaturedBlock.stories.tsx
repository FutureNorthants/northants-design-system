import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NewsArticleFeaturedBlock from './NewsArticleFeaturedBlock';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { NewsArticleData } from './NewsArticleFeaturedBlock.storydata';

const meta: Meta<typeof NewsArticleFeaturedBlock> = {
  title: 'Library/Structure/News Article Featured Block',
  component: NewsArticleFeaturedBlock,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsArticleFeaturedBlock>;

export const ExampleNewsArticleFeaturedBlock: Story = {
  args: {
    articles: NewsArticleData,
    viewAllLink: '/',
  },
  render: (args) => (
    <MaxWidthContainer>
      <NewsArticleFeaturedBlock {...args} />
    </MaxWidthContainer>
  ),
};

export const ExampleNoNewsArticleFeaturedBlock: Story = {
  ...ExampleNewsArticleFeaturedBlock,
  args: {
    articles: [],
  },
};

export const ExampleNoTitleOrButton: Story = {
  ...ExampleNewsArticleFeaturedBlock,
  args: {
    articles: NewsArticleData,
    withoutTitle: true,
    viewAllLink: '',
  },
};

export const Example3Articles: Story = {
  ...ExampleNewsArticleFeaturedBlock,
  args: {
    articles: NewsArticleData.slice(0, 3),
  },
};

export const Example2Articles: Story = {
  ...ExampleNewsArticleFeaturedBlock,
  args: {
    articles: NewsArticleData.slice(0, 2),
  },
};

export const Example1Article: Story = {
  ...ExampleNewsArticleFeaturedBlock,
  args: {
    articles: NewsArticleData.slice(0, 1),
  },
};
