import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WestColouredLogo from './logo';

const meta: Meta<typeof WestColouredLogo> = {
  title: 'Library/Logos/West Coloured',
  component: WestColouredLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WestColouredLogo>;

export const LogoExample: Story = {};
