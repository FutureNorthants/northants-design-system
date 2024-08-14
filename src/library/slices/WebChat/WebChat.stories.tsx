import React from 'react';
import { StoryFn } from '@storybook/react';
import WebChat from './WebChat';
import { WebChatProps } from './WebChat.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Slices/WebChat',
  component: WebChat,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<WebChatProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <WebChat {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleWebChat = Template.bind({});
ExampleWebChat.args = {
  buttonText: 'Open WebChat',
  action: '/',
};

export const WebChatUnavailable = Template.bind({});
WebChatUnavailable.args = {
  buttonText: 'Open WebChat',
  action: '/',
  forceUnavailable: true,
  unavailableMessage: 'Sorry, webchat is currently unavailable.',
};
