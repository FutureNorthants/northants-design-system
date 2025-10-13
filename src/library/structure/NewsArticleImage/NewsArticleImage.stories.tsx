import React from 'react';
import NewsArticleImage from './NewsArticleImage';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

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
export const ExampleWithAltText: Story = {
  ...Example,
  args: {
    ...Example.args,
    imageAltText: 'This is the alt text',
  },
};

export const ExampleWithAltTextAndNoImage: Story = {
  args: {
    image1440x810: 'about:blank',
    image144x81: 'about:blank',
    imageAltText: 'This is the alt text',
  },
};

export const ExampleWithCaption: Story = {
  ...Example,
  args: {
    ...Example.args,
    imageCaption: 'This is the caption',
  },
};
