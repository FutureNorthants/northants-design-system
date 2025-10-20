import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConsultationList from './ConsultationList';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';
import { ExampleConsultationListData } from './ConsultationList.storydata';

const meta: Meta<typeof ConsultationList> = {
  title: 'Library/Structure/Consultation List',
  component: ConsultationList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConsultationList>;

export const ExampleConsultationList: Story = {
  args: ExampleConsultationListData,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ConsultationList {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
