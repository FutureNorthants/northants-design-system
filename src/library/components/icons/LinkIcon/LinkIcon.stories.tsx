import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LinkIcon from './LinkIcon';

const meta: Meta<typeof LinkIcon> = {
  title: 'Library/Icons/Link',
  component: LinkIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const ExampleLinkIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
