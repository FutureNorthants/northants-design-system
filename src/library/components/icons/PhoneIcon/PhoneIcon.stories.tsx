import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
type Story = StoryObj<typeof PhoneIcon>;

export const ExamplePhoneIcon: Story = {
  args: {
    colourFill: '#333',
  },
};
