import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleLoadingSpinner: Story = {};
