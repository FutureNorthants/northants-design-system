import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
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
  buttonText: 'Chat to an advisor',
  action: '/',
  queues: [
    {
      title: 'Select an option',
      value: '',
    },
    {
      title: 'Council tax',
      value: 'council_tax',
    },
    {
      title: 'Benefits application',
      value: 'benefits',
    },
    {
      title: 'Road and highways faults',
      value: 'highways',
    },
  ],
};

export const WebChatUnavailable = Template.bind({});
WebChatUnavailable.args = {
  buttonText: 'Chat to an advisor',
  action: '/',
  forceUnavailable: true,
  unavailableMessage: 'Sorry, webchat is currently unavailable.',
};
