import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleCustomSearch: Story = {
  args: ExampleCustomSearchProps,
};

export const ExampleCustomSearchWithLabel: Story = {
  ...ExampleCustomSearch,
  args: { ...ExampleCustomSearch.args, hasHiddenLabel: false },
};

export const ExampleCustomSearchWithId: Story = {
  ...ExampleCustomSearch,
  args: { ...ExampleCustomSearch.args, id: 'myCustomId' },
};
