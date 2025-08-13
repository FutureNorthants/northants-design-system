import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleWebsiteIcon: Story = {
  args: {
    colourFill: '#333',
  },
};
