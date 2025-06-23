import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
type Story = StoryObj<typeof SearchHeader>;

export const ExampleSearchHeader: Story = {};
