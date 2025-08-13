import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleSearchIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
