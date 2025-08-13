import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const EventPage: Story = {
  args: {
    event: ExampleEventListResults.results[0],
  },
  parameters: {
    pageLayout: 'page',
  },
};
