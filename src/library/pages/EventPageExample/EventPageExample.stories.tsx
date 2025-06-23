import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EventPageExample, EventPageExampleProps } from './EventPageExample';
import { ExampleEventListResults } from '../../structure/EventList/EventList.storydata';

const meta: Meta<typeof EventPageExample> = {
  title: 'Page Examples/Event page example',
  component: EventPageExample,
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof EventPageExample>;

export const EventPage: Story = {
  args: {
    event: ExampleEventListResults.results[0],
  },
  parameters: {
    pageLayout: 'page',
  },
};
