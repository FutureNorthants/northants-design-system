import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Library/Components/Loading Spinner',
  component: LoadingSpinner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const ExampleLoadingSpinner: Story = {};
