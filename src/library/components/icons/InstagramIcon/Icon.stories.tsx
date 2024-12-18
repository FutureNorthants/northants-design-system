import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Library/Icons/Instagram',
  component: Icon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const ExampleInstagramIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
