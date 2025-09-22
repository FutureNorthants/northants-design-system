import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PhoneIcon from './PhoneIcon';

const meta: Meta<typeof PhoneIcon> = {
  title: 'Library/Icons/Phone',
  component: PhoneIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExamplePhoneIcon: Story = {
  args: {
    colourFill: '#333',
  },
};
