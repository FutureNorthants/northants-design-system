import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import RelatedEvents from './RelatedEvents';

const meta: Meta<typeof RelatedEvents> = {
  title: 'Library/Components/RelatedEvents',
  component: RelatedEvents,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleRelatedEvents: Story = {
  args: {
    title: 'Related events',
    events: [
      {
        title: 'An example event',
        summary: 'The example events summary that describes the event.',
        startTime: '16 August 2024 10:00:00',
        endTime: '16 August 2024 11:00:00',
        url: '/events/1',
        imageLarge: 'https://via.placeholder.com/720x405',
        imageSmall: 'https://via.placeholder.com/360x203',
        imageAltText: 'The example images alt text',
        location: 'One Angel Square',
      },
      {
        title: 'A second example event',
        summary: 'A second example events summary that describes the event.',
        startTime: '17 August 2024 10:00:00',
        endTime: '17 August 2024 11:00:00',
        url: '/events/2',
        imageLarge: 'https://via.placeholder.com/720x405',
        imageSmall: 'https://via.placeholder.com/360x203',
        imageAltText: 'The example images alt text',
        location: 'One Angel Square',
      },
    ],
  },
};

export const ExampleRelatedEventsNoEvents: Story = {
  args: {
    title: 'Related events',
    events: [],
  },
};
