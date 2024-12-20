import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Video from './Video';
import { VideoProvider } from './Video.types';

const meta: Meta<typeof Video> = {
  title: 'Library/Slices/Video',
  component: Video,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Video>;

export const YoutubeVideo: Story = {
  args: {
    video_id: 'Hwmbn7nGMLw',
    provider: VideoProvider.YouTube,
    description: 'Watch a video about West Northants Council',
    allowCookies: true,
  },
};

export const YoutubeVideoWithCaptions: Story = {
  args: {
    video_id: 'B4YqyYBQI3A',
    provider: VideoProvider.YouTube,
    description: 'Watch a video about Borrow Box.',
    allowCookies: true,
  },
};

export const VimeoVideo: Story = {
  args: {
    video_id: '94177065',
    provider: VideoProvider.Vimeo,
    description: 'Watch a video on Vimeo',
    allowCookies: true,
  },
};

export const YoutubeVideoWithoutCookies: Story = {
  args: {
    video_id: 'Hwmbn7nGMLw',
    provider: VideoProvider.YouTube,
    description: 'Watch a video on YouTube',
    allowCookies: false,
  },
};

export const VimeoVideoWithoutCookies: Story = {
  args: {
    video_id: '94177065',
    provider: VideoProvider.Vimeo,
    description: 'Watch a video on Vimeo',
    allowCookies: false,
  },
};

export const YoutubeVideoAutoDetectCookies: Story = {
  args: {
    video_id: 'Hwmbn7nGMLw',
    description: 'Watch a video on YouTube about West Northants Council',
    provider: VideoProvider.YouTube,
  },
};
