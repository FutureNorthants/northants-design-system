import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DownloadFileIcon from './DownloadFileIcon';

const meta: Meta<typeof DownloadFileIcon> = {
  title: 'Library/Icons/Download File',
  component: DownloadFileIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DownloadFileIcon>;

export const ExampleDownloadFileIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
