import React from 'react';
import { StoryFn } from '@storybook/react';
import EventDetails from './EventDetails';
import { EventDetailsProps } from './EventDetails.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Event Details',
  component: EventDetails,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<EventDetailsProps> = (args) => (
  <SBPadding>
    <EventDetails {...args} />
  </SBPadding>
);

export const ExampleEventDetails = Template.bind({});
ExampleEventDetails.args = {
  startTime: '16 August 2024 10:15:00',
  location: 'The Guildhall',
};

export const ExampleEventDetailsWithEnd = Template.bind({});
ExampleEventDetailsWithEnd.args = {
  startTime: '16 August 2024 10:30:00',
  location: 'The Guildhall',
  endTime: '16 August 2024 11:00:00',
};

export const ExampleEventDetailsWithEndDifferentDay = Template.bind({});
ExampleEventDetailsWithEndDifferentDay.args = {
  startTime: '16 August 2024 10:15:00',
  location: 'The Guildhall',
  endTime: '17 August 2024 11:00:00',
};

export const ExampleEventDetailsAllDay = Template.bind({});
ExampleEventDetailsAllDay.args = {
  startTime: '16 August 2024 00:00:00',
  location: 'The Guildhall',
  endTime: '16 August 2024 23:59:00',
};

export const ExampleEventDetailsSimplifiedTime = Template.bind({});
ExampleEventDetailsSimplifiedTime.args = {
  startTime: '16 August 2024 09:00:00',
  location: 'The Guildhall',
  endTime: '16 August 2024 10:00:00',
};

export const ExampleEventDetailsMidnight = Template.bind({});
ExampleEventDetailsMidnight.args = {
  startTime: '16 August 2024 00:00:00',
  location: 'The Guildhall',
  endTime: '16 August 2024 10:00:00',
};

export const ExampleEventDetailsMidday = Template.bind({});
ExampleEventDetailsMidday.args = {
  startTime: '16 August 2024 12:00:00',
  location: 'The Guildhall',
  endTime: '16 August 2024 13:00:00',
};
