import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import CloseIcon from './CloseIcon';

const meta: Meta<typeof CloseIcon> = {
  title: 'Library/Icons/Close',
  component: CloseIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleCloseIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
