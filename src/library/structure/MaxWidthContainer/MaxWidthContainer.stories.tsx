import React from 'react';
import MaxWidthContainer from './MaxWidthContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MaxWidthContainer> = {
  title: 'Library/structure/Max width Container',
  component: MaxWidthContainer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof MaxWidthContainer>;

export const MaxWidthContainerExample: Story = {
  args: {
    classes: 'testclass',
  },
  render: (args) => <MaxWidthContainer {...args}>Children of the page container goes here</MaxWidthContainer>,
};
