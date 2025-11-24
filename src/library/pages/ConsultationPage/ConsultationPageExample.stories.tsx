import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
import { ConsultationPageExample, ConsultationPageExampleProps } from './ConsultationPageExample';
import { ExampleConsultationListData } from '../../structure/ConsultationList/ConsultationList.storydata';

const meta: Meta<typeof ConsultationPageExample> = {
  title: 'Page Examples/Consultation page example',
  component: ConsultationPageExample,
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ConsultationPage: Story = {
  args: { consultation: ExampleConsultationListData.results[0] },
  parameters: {
    pageLayout: 'page',
  },
};
