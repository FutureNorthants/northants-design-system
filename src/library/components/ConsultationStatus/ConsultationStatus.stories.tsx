
import React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import ConsultationStatus from "./ConsultationStatus";

const meta: Meta<typeof ConsultationStatus> = {
    title: 'Library/Components/ConsultationStatus',
    component: ConsultationStatus,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

export default meta;
type Story = StoryObj<typeof ConsultationStatus>;

export const ExampleConsultationStatus: Story = {     
  args: {
    foo: "bar"
  },
  render: (args) => <ConsultationStatus {...args} />
};

export const AnotherExampleConsultationStatus: Story = {
  ...ExampleConsultationStatus,    
  args: {
    foo: "foo"
  }
};
