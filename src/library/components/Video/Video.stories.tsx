import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Video from './Video';
import { VideoProps } from './Video.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Video',
  component: Video,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<VideoProps> = (args) => (
  <SBPadding>
    <Video {...args} />
  </SBPadding>
);

export const YoutubeVideo = Template.bind({});
YoutubeVideo.args = {
  video_id: 'Hwmbn7nGMLw',
  provider: 'YouTube',
};

export const VimeoVideo = Template.bind({});
VimeoVideo.args = {
  video_id: '94177065',
  provider: 'Vimeo',
};
