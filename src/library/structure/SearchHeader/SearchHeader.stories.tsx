import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import SearchHeader from './SearchHeader';

const meta: Meta<typeof SearchHeader> = {
  title: 'Library/structure/Search header',
  component: SearchHeader,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleSearchHeader: Story = {};
