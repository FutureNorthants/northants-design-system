import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WebsiteIcon from './WebsiteIcon';

const meta: Meta<typeof WebsiteIcon> = {
  title: 'Library/Icons/Website',
  component: WebsiteIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WebsiteIcon>;

export const ExampleWebsiteIcon: Story = {
  args: {
    colourFill: '#333',
  },
};
