import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CustomSearch from './CustomSearch';
import { ExampleCustomSearchProps } from './CustomSearch.storydata';

const meta: Meta<typeof CustomSearch> = {
  title: 'Library/Components/CustomSearch',
  component: CustomSearch,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomSearch>;

export const ExampleCustomSearch: Story = {
  args: ExampleCustomSearchProps,
};

export const ExampleCustomSearchWithLabel: Story = {
  ...ExampleCustomSearch,
  args: { ...ExampleCustomSearchProps, hasHiddenLabel: false },
};

export const ExampleCustomSearchWithId: Story = {
  ...ExampleCustomSearch,
  args: { ...ExampleCustomSearchProps, id: 'myCustomId' },
};
