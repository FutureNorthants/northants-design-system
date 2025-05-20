import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { EventLandingPageExample, EventLandingPageExampleProps } from './EventLandingPageExample';

export default {
  title: 'Page Examples/Event landing page example',
  component: EventLandingPageExample,
  parameters: {
    status: {
      type: 'stable',
    },
  },
} as Meta;

const Template: StoryFn<EventLandingPageExampleProps> = (args) => <EventLandingPageExample {...args} />;

export const EventLandingPage = Template.bind({});
EventLandingPage.args = {};
