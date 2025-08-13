import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NorthColouredLogo from './logo';

const meta: Meta<typeof NorthColouredLogo> = {
  title: 'Library/Logos/North Coloured',
  component: NorthColouredLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NorthColouredLogo>;

export const LogoExample: Story = {};
