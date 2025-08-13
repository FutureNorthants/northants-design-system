import React from 'react';
import NewsArticleOldBanner from './NewsArticleOldBanner';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof NewsArticleOldBanner> = {
  title: 'Library/Structure/News Article Old Banner',
  component: NewsArticleOldBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'Example News Article Date',
  },
  render: (args) => (
    <MaxWidthContainer>
      <NewsArticleOldBanner {...args} />
    </MaxWidthContainer>
  ),
};
