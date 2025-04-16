import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PhaseBanner from './PhaseBanner';

const meta: Meta<typeof PhaseBanner> = {
  title: 'library/Structure/Phase Banner',
  component: PhaseBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhaseBanner>;

export const PhaseBannerExample: Story = {};

export const PhaseBannerHomeExample: Story = {
  args: {
    isHome: true,
  },
};
