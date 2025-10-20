import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
import { ConsultationLandingPageExample } from './ConsultationsLandingPageExample';

const meta: Meta<typeof ConsultationLandingPageExample> = {
  title: 'Page Examples/Consultations landing page',
  component: ConsultationLandingPageExample,
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConsultationLandingPage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
