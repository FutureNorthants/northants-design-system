import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchIcon from './SearchIcon';

const meta: Meta<typeof SearchIcon> = {
  title: 'Library/Icons/Search',
  component: SearchIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchIcon>;

export const ExampleSearchIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
