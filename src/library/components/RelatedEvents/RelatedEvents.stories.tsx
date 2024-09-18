import React from 'react';
import { StoryFn } from '@storybook/react';
import RelatedEvents from './RelatedEvents';
import { RelatedEventsProps } from './RelatedEvents.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/RelatedEvents',
  component: RelatedEvents,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<RelatedEventsProps> = (args) => (
  <SBPadding>
    <RelatedEvents {...args} />
  </SBPadding>
);

export const ExampleRelatedEvents = Template.bind({});
ExampleRelatedEvents.args = {
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
      title: 'An example event',
      summary: 'The example events summary that describes the event.',
      startTime: '16 August 2024 10:00:00',
      endTime: '16 August 2024 11:00:00',
      url: '/events/2',
      imageLarge: 'https://via.placeholder.com/720x405',
      imageSmall: 'https://via.placeholder.com/360x203',
      imageAltText: 'The example images alt text',
      location: 'One Angel Square',
    },
  ],
};

export const ExampleRelatedEventsNoEvents = Template.bind({});
ExampleRelatedEventsNoEvents.args = {
  title: 'Related events',
  events: [],
};
