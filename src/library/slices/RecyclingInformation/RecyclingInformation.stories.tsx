import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import RecyclingInformation from './RecyclingInformation';
import PageMain from '../../structure/PageMain/PageMain';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof RecyclingInformation> = {
  title: 'Library/Slices/Recycling Information',
  component: RecyclingInformation,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof RecyclingInformation>;

export const DefaultRecyclingInformation: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <RecyclingInformation {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
