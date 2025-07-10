import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WestWhiteLogo from './logo';

const meta: Meta<typeof WestWhiteLogo> = {
  title: 'Library/Logos/West White',
  component: WestWhiteLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WestWhiteLogo>;

export const LogoExample: Story = {
  render: (args) => (
    <div style={{ backgroundColor: 'black' }}>
      <WestWhiteLogo {...args} />
    </div>
  ),
};
