import React from 'react';
import { StoryFn } from '@storybook/react';
import DownloadFileIcon from './DownloadFileIcon';
import { DownloadFileIconProps } from './DownloadFileIcon.types';
import { SBPadding } from '../../../../../.storybook/SBPadding';

export default {
  title: 'Library/Icons/Download File',
  component: DownloadFileIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DownloadFileIconProps> = (args) => (
  <SBPadding>
    <DownloadFileIcon {...args} />
  </SBPadding>
);

export const ExampleDownloadFileIcon = Template.bind({});
ExampleDownloadFileIcon.args = {
  colourFill: '#111',
};
