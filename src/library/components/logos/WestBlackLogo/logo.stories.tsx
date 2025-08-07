import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WestBlackLogo from './logo';

const meta: Meta<typeof WestBlackLogo> = {
  title: 'Library/Logos/West Black',
  component: WestBlackLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WestBlackLogo>;

export const LogoExample: Story = {
  render: (args) => (
    <div style={{ backgroundColor: 'white' }}>
      <WestBlackLogo {...args} />
    </div>
  ),
};
