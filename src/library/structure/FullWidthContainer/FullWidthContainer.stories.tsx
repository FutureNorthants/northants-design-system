import React from 'react';
import FullWidthContainer from './FullWidthContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FullWidthContainer> = {
  title: 'Library/structure/Full width Container',
  component: FullWidthContainer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof FullWidthContainer>;

export const FullWidthContainerExample: Story = {
  args: {
    hasBackground: true,
    hasPadding: true,
  },
  render: (args) => <FullWidthContainer {...args}>Children of the page container go here</FullWidthContainer>,
  parameters: {
    pageLayout: 'page',
  },
};

export const FullWidthContainerWithoutPadding: Story = {
  ...FullWidthContainerExample,
  args: {
    hasBackground: true,
    hasPadding: false,
  },
};

export const FullWidthContainerWithoutBackground: Story = {
  ...FullWidthContainerExample,
  args: {
    hasBackground: false,
    hasPadding: true,
  },
};
