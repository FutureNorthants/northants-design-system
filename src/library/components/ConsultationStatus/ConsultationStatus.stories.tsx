import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ConsultationStatus from './ConsultationStatus';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import dayjs from 'dayjs';

const meta: Meta<typeof ConsultationStatus> = {
  title: 'Library/Components/ConsultationStatus',
  component: ConsultationStatus,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConsultationStatus>;

export const ExampleConsultationStatus: Story = {
  args: {
    openDate: '2025-10-01',
    closeDate: '2025-11-30',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ConsultationStatus {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ClosedConsultationStatus: Story = {
  ...ExampleConsultationStatus,
  args: {
    openDate: '2024-01-01',
    closeDate: '2024-02-28',
  },
};

export const OpenConsultationStatus: Story = {
  ...ExampleConsultationStatus,
  args: {
    openDate: dayjs().subtract(5, 'days').format('YYYY-MM-DD'),
    closeDate: dayjs().add(10, 'days').format('YYYY-MM-DD'),
  },
};
