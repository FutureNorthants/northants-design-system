import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Video from './Video';
import { VideoProps } from './Video.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Slices/Video',
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
  description: 'Watch a video about West Northants Council',
  allowCookies: true,
};

export const VimeoVideo = Template.bind({});
VimeoVideo.args = {
  video_id: '94177065',
  provider: 'Vimeo',
  description: 'Watch a video on Vimeo',
  allowCookies: true,
};

export const YoutubeVideoWithoutCookies = Template.bind({});
YoutubeVideoWithoutCookies.args = {
  video_id: 'Hwmbn7nGMLw',
  provider: 'YouTube',
  description: 'Watch a video on YouTube',
  allowCookies: false,
};

export const VimeoVideoWithoutCookies = Template.bind({});
VimeoVideoWithoutCookies.args = {
  video_id: '94177065',
  provider: 'Vimeo',
  description: 'Watch a video on Vimeo',
  allowCookies: false,
};

export const YoutubeVideoAutoDetectCookies = Template.bind({});
YoutubeVideoAutoDetectCookies.args = {
  video_id: 'Hwmbn7nGMLw',
  description: 'Watch a video on YouTube about West Northants Council',
  provider: 'YouTube',
};
