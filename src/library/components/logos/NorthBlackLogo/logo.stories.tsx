import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import NorthBlackLogo from './logo';

const meta: Meta<typeof NorthBlackLogo> = {
  title: 'Library/Logos/North Black',
  component: NorthBlackLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NorthBlackLogo>;

export const LogoExample: Story = {
  render: (args) => (
    <div style={{ backgroundColor: 'white' }}>
      <NorthBlackLogo {...args} />
    </div>
  ),
};
