import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleDownloadFileIcon: Story = {
  args: {
    colourFill: '#111',
  },
};
