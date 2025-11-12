import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConsultationLink from './ConsultationLink';
import { ExampleConsultationListData } from '../../structure/ConsultationList/ConsultationList.storydata';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof ConsultationLink> = {
  title: 'Library/Components/Consultation Link',
  component: ConsultationLink,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConsultationLink>;

export const ExampleConsultationLink: Story = {
  args: ExampleConsultationListData.results[0],
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ConsultationLink {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
