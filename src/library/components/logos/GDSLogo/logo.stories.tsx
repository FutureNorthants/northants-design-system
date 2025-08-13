import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import GDSLogo from './logo';

const meta: Meta<typeof GDSLogo> = {
  title: 'Library/Logos/GDS Logo',
  component: GDSLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof GDSLogo>;

export const LogoExample: Story = {
  render: () => (
    <div style={{ backgroundColor: 'black' }}>
      <GDSLogo />
    </div>
  ),
};
