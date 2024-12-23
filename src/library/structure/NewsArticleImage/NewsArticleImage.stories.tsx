import React from 'react';
import NewsArticleImage from './NewsArticleImage';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof NewsArticleImage> = {
  title: 'Library/Structure/News Article Image',
  component: NewsArticleImage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewsArticleImage>;

export const Example: Story = {
  args: {
    image1440x810: 'https://picsum.photos/id/93/1440/810',
    image144x81: 'https://picsum.photos/id/93/144/81',
  },
  render: (args) => (
    <MaxWidthContainer>
      <NewsArticleImage {...args} />
    </MaxWidthContainer>
  ),
};
export const ExampleWithAle: Story = {
  ...Example,
  args: {
    image1440x810: 'https://picsum.photos/id/93/1440/810',
    image144x81: 'https://picsum.photos/id/93/144/81',
    imageAltText: 'This is the alt text',
  },
};

export const ExampleWithCaptioe: Story = {
  ...Example,
  args: {
    image1440x810: 'https://picsum.photos/id/93/1440/810',
    image144x81: 'https://picsum.photos/id/93/144/81',
    imageCaption: 'This is the caption',
  },
};
