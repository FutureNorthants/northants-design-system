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
type Story = StoryObj<typeof EventLink>;

export const ExampleEventLink: Story = {
  args: {
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
  },
};

export const ExamplePromotedEventLink: Story = {
  args: {
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
  },
};

export const ExampleEventLinkWithSummary: Story = {
  args: {
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
  },
};

export const ExampleEventLinkNoPadding: Story = {
  args: {
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
  },
};
