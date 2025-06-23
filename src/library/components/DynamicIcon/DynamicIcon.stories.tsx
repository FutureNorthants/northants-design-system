import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DynamicIcon from './DynamicIcon';

const meta: Meta<typeof DynamicIcon> = {
  title: 'Library/Components/Dynamic Icon',
  component: DynamicIcon,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};
export default meta;
type Story = StoryObj<typeof DynamicIcon>;

export const BusDynamicIcon: Story = {
  args: {
    level: 2,
    icon: 'bus',
  },
};

export const BenefitsDynamicIcon: Story = {
  ...BusDynamicIcon,
  args: {
    level: 1,
    icon: 'benefits',
  },
};
