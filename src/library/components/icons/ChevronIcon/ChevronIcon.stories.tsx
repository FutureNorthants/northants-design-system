import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChevronIcon from './ChevronIcon';

const meta: Meta<typeof ChevronIcon> = {
  title: 'Library/Icons/Chevron',
  component: ChevronIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChevronIcon>;

export const DownChevronIcon: Story = {
  args: {
    colourFill: '#333',
    direction: 'down',
  },
};

export const LeftChevronIcon: Story = {
  args: {
    colourFill: '#333',
    direction: 'left',
  },
};

export const UpChevronIcon: Story = {
  args: {
    colourFill: '#333',
    direction: 'up',
  },
};

export const RightChevronIcon: Story = {
  args: {
    colourFill: '#333',
    direction: 'right',
  },
};
