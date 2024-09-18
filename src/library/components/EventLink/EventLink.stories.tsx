import React from 'react';
import { StoryFn } from '@storybook/react';
import EventLink from './EventLink';
import { EventLinkProps } from './EventLink.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/EventLink',
  component: EventLink,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<EventLinkProps> = (args) => (
  <SBPadding>
    <EventLink {...args} />
  </SBPadding>
);

export const ExampleEventLink = Template.bind({});
ExampleEventLink.args = {
  title: 'An example event',
  summary: 'The example events summary that describes the event.',
  startTime: '16 August 2024 10:00:00',
  endTime: '16 August 2024 11:00:00',
  url: '/events/1',
  imageLarge: 'https://via.placeholder.com/720x405',
  imageSmall: 'https://via.placeholder.com/360x203',
  imageAltText: 'The example images alt text',
  location: 'One Angel Square',
  parentTitle: 'Bins, recycling and waste',
};

export const ExamplePromotedEventLink = Template.bind({});
ExamplePromotedEventLink.args = {
  title: 'An example event',
  summary: 'The example events summary that describes the event.',
  startTime: '16 August 2024 10:00:00',
  endTime: '16 August 2024 11:00:00',
  url: '/events/1',
  imageLarge: 'https://via.placeholder.com/720x405',
  imageSmall: 'https://via.placeholder.com/360x203',
  imageAltText: 'The example images alt text',
  location: 'One Angel Square',
  isPromoted: true,
  parentTitle: 'Bins, recycling and waste',
};

export const ExampleEventLinkWithSummary = Template.bind({});
ExampleEventLinkWithSummary.args = {
  title: 'An example event',
  summary: 'The example events summary that describes the event.',
  startTime: '16 August 2024 10:00:00',
  endTime: '16 August 2024 11:00:00',
  url: '/events/1',
  imageLarge: 'https://via.placeholder.com/720x405',
  imageSmall: 'https://via.placeholder.com/360x203',
  imageAltText: 'The example images alt text',
  location: 'One Angel Square',
  showSummary: true,
  parentTitle: 'Bins, recycling and waste',
};

export const ExampleEventLinkNoPadding = Template.bind({});
ExampleEventLinkNoPadding.args = {
  title: 'An example event',
  summary: 'The example events summary that describes the event.',
  startTime: '16 August 2024 10:00:00',
  endTime: '16 August 2024 11:00:00',
  url: '/events/1',
  imageLarge: 'https://via.placeholder.com/720x405',
  imageSmall: 'https://via.placeholder.com/360x203',
  imageAltText: 'The example images alt text',
  location: 'One Angel Square',
  showSummary: false,
  hasPadding: false,
  parentTitle: 'Bins, recycling and waste',
};
