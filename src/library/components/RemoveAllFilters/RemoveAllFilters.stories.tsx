import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
type Story = StoryObj<typeof RemoveAllFilters>;

export const ExampleRemoveAllFilters: Story = {};
