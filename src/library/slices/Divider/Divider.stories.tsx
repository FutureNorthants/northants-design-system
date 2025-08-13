import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Library/Slices/Divider',
  component: Divider,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleDivider: Story = {};
