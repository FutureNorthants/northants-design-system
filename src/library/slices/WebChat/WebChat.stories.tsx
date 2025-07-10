import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WebChat from './WebChat';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof WebChat> = {
  title: 'Library/Slices/WebChat',
  component: WebChat,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WebChat>;

export const ExampleWebChat: Story = {
  args: {
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
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <WebChat {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const WebChatUnavailable: Story = {
  ...ExampleWebChat,
  args: {
    buttonText: 'Chat to an advisor',
    action: '/',
    forceUnavailable: true,
    unavailableMessage: 'Sorry, webchat is currently unavailable.',
  },
};
