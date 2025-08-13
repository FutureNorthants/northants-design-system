import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import HeartIcon from './HeartIcon';

const meta: Meta<typeof HeartIcon> = {
  title: 'Library/Icons/Heart',
  component: HeartIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleHeartIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
