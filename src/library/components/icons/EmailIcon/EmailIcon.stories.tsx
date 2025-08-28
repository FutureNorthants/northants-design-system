import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import EmailIcon from './EmailIcon';

const meta: Meta<typeof EmailIcon> = {
  title: 'Library/Icons/Email',
  component: EmailIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleEmailIcon: Story = {
  args: {
    colourFill: '#333',
  },
};
