import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PinIcon from './PinIcon';

const meta: Meta<typeof PinIcon> = {
  title: 'Library/Icons/Pin',
  component: PinIcon,
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
