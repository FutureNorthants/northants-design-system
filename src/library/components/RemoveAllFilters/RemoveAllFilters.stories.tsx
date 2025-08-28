import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import RemoveAllFilters from './RemoveAllFilters';

const meta: Meta<typeof RemoveAllFilters> = {
  title: 'Library/Components/Remove All Filters',
  component: RemoveAllFilters,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleRemoveAllFilters: Story = {};
