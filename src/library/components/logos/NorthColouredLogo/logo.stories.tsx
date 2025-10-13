import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
