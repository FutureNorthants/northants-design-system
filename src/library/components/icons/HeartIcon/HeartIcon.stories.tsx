import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeartIcon from './HeartIcon';

const meta: Meta<typeof HeartIcon> = {
  title: 'Library/Icons/Heart',
  component: HeartIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeartIcon>;

export const ExampleHeartIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
