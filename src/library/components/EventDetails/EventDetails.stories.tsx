import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EventDetails from './EventDetails';

const meta: Meta<typeof EventDetails> = {
  title: 'Library/Components/Event Details',
  component: EventDetails,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleEventDetails: Story = {
  args: {
    startTime: '16 August 2024 10:15:00',
    location: 'The Guildhall',
  },
};

export const ExampleEventDetailsWithEnd: Story = {
  args: {
    startTime: '16 August 2024 10:30:00',
    location: 'The Guildhall',
    endTime: '16 August 2024 11:00:00',
  },
};

export const ExampleEventDetailsWithEndDifferentDay: Story = {
  args: {
    startTime: '16 August 2024 10:15:00',
    location: 'The Guildhall',
    endTime: '17 August 2024 11:00:00',
  },
};

export const ExampleEventDetailsAllDay: Story = {
  args: {
    startTime: '16 August 2024 00:00:00',
    location: 'The Guildhall',
    endTime: '16 August 2024 23:59:00',
  },
};

export const ExampleEventDetailsSimplifiedTime: Story = {
  args: {
    startTime: '16 August 2024 09:00:00',
    location: 'The Guildhall',
    endTime: '16 August 2024 10:00:00',
  },
};

export const ExampleEventDetailsMidnight: Story = {
  args: {
    startTime: '16 August 2024 00:00:00',
    location: 'The Guildhall',
    endTime: '16 August 2024 10:00:00',
  },
};

export const ExampleEventDetailsMidday: Story = {
  args: {
    startTime: '16 August 2024 12:00:00',
    location: 'The Guildhall',
    endTime: '16 August 2024 13:00:00',
  },
};
