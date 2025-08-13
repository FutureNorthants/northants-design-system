import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleLinkIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
