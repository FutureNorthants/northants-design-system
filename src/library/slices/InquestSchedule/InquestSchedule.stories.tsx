import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InquestSchedule from './InquestSchedule';
import { ExampleInquestScheduleArray } from './InquestSchedule.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof InquestSchedule> = {
  title: 'Library/Slices/InquestSchedule',
  component: InquestSchedule,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof InquestSchedule>;

export const ExampleInquestSchedule: Story = {
  args: {
    caseAppointments: ExampleInquestScheduleArray,
    title: 'Upcoming inquests',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <InquestSchedule {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const InquestScheduleNoItems: Story = {
  ...ExampleInquestSchedule,
  args: {
    caseAppointments: [],
    title: 'Upcoming inquests',
  },
};

export const InquestScheduleError: Story = {
  ...ExampleInquestSchedule,
  args: {
    caseAppointments: [],
    title: 'Upcoming inquests',
    error: true,
  },
};
