import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Library/Icons/LinkedIn',
  component: Icon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
