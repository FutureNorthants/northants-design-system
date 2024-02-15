import React from 'react';
import { StoryFn } from '@storybook/react';
import StreamingVideo from './StreamingVideo';
import { StreamingVideoProps } from './StreamingVideo.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Slices/StreamingVideo',
  component: StreamingVideo,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<StreamingVideoProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <StreamingVideo {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

// TODO: Replace the src with a council video feed

export const ExampleStreamingVideo = Template.bind({});
ExampleStreamingVideo.args = {
  src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
  type: 'application/x-mpegURL',
  title: 'An example streaming video',
  autoplay: false,
};

export const ExampleStreamingVideoNoTitle = Template.bind({});
ExampleStreamingVideoNoTitle.args = {
  src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
  type: 'application/x-mpegURL',
};
