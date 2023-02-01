import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import InquestSchedule from './InquestSchedule';
import { InquestScheduleProps } from './InquestSchedule.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleInquestScheduleData } from './InquestSchedule.storydata';
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

const Template: Story<InquestScheduleProps> = (args) => (
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
  CaseAppointments: [
    ExampleInquestScheduleData,
    ExampleInquestScheduleData,
    ExampleInquestScheduleData,
    ExampleInquestScheduleData,
  ],
  title: 'Upcoming inquests',
};

export const InquestScheduleNoItems = Template.bind({});
InquestScheduleNoItems.args = {
  CaseAppointments: [],
  title: 'Upcoming inquests',
};
