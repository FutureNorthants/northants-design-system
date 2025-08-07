import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EventLink from './EventLink';

const meta: Meta<typeof EventLink> = {
  title: 'Library/Components/EventLink',
  component: EventLink,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleEventLink: Story = {
  args: {
    title: 'An example event',
    summary: 'The example events summary that describes the event.',
    startTime: '16 August 2024 10:00:00',
    endTime: '16 August 2024 11:00:00',
    url: '/events/1',
    imageLarge: 'https://picsum.photos/id/18/1440/810',
    imageSmall: 'https://picsum.photos/id/18/720/405',
    imageAltText: 'The example images alt text',
    location: 'One Angel Square',
    parentTitle: 'Bins, recycling and waste',
  },
};

export const ExamplePromotedEventLink: Story = {
  args: {
    ...ExampleEventLink.args,
    isPromoted: true,
  },
};

export const ExampleEventLinkWithSummary: Story = {
  args: {
    ...ExampleEventLink.args,
    showSummary: true,
  },
};

export const ExampleEventLinkNoPadding: Story = {
  args: {
    ...ExampleEventLink.args,
    hasPadding: false,
  },
};
