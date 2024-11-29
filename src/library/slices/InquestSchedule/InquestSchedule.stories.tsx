import React from 'react';
import { StoryFn } from '@storybook/react';
import InquestSchedule from './InquestSchedule';
import { InquestScheduleProps } from './InquestSchedule.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleInquestScheduleArray, ExampleInquestScheduleData } from './InquestSchedule.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Slices/InquestSchedule',
  component: InquestSchedule,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<InquestScheduleProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <InquestSchedule {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleInquestSchedule = Template.bind({});
ExampleInquestSchedule.args = {
  caseAppointments: ExampleInquestScheduleArray,
  title: 'Upcoming Inquests',
};

export const InquestScheduleNoItems = Template.bind({});
InquestScheduleNoItems.args = {
  caseAppointments: [],
  title: 'Upcoming Inquests',
};

export const InquestScheduleError = Template.bind({});
InquestScheduleError.args = {
  caseAppointments: [],
  title: 'Upcoming Inquests',
  error: true,
};
