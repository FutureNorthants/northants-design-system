import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EventLandingPageExample } from './EventLandingPageExample';

const meta: Meta<typeof EventLandingPageExample> = {
  title: 'Page Examples/Event landing page example',
  component: EventLandingPageExample,
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EventLandingPage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
