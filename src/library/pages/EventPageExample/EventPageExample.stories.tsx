import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EventPageExample, EventPageExampleProps } from './EventPageExample';
import { ExampleEventListResults } from '../../structure/EventList/EventList.storydata';

export default {
  title: 'Page Examples/Event page example',
  component: EventPageExample,
  parameters: {
    status: {
      type: 'stable',
    },
  },
} as Meta;

const Template: StoryFn<EventPageExampleProps> = (args) => <EventPageExample {...args} />;

export const EventPage = Template.bind({});
EventPage.args = {
  event: ExampleEventListResults.results[0],
};
