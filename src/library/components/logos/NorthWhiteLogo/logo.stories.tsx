import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import NorthWhiteLogo from './logo';

const meta: Meta<typeof NorthWhiteLogo> = {
  title: 'Library/Logos/North White',
  component: NorthWhiteLogo,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof NorthWhiteLogo>;

export const LogoExample: Story = {
  render: (args) => (
    <div style={{ backgroundColor: 'black' }}>
      <NorthWhiteLogo {...args} />
    </div>
  ),
};
