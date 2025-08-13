import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PinIcon from './PinIcon';

const meta: Meta<typeof PinIcon> = {
  title: 'Library/Icons/Pin',
  component: PinIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleHeartIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
