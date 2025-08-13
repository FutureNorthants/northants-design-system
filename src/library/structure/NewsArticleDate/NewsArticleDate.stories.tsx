import React from 'react';
import NewsArticleDate from './NewsArticleDate';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof NewsArticleDate> = {
  title: 'Library/Structure/News Article Date',
  component: NewsArticleDate,
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
    text: '1614178638',
    format: 'X',
  },
  render: (args) => (
    <MaxWidthContainer>
      <NewsArticleDate {...args} />
    </MaxWidthContainer>
  ),
};

export const OtherExample: Story = {
  ...Example,
  args: {
    text: '15 January 2021',
    format: 'DD MMMM YYYY',
  },
};
