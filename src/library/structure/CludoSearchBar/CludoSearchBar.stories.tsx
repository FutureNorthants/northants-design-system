import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import CludoSearchBar from './CludoSearchBar';
import PageMain from '../PageMain/PageMain';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof CludoSearchBar> = {
  title: 'Library/Structure/Cludo Search Bar',
  component: CludoSearchBar,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleCludoSearchBar: Story = {
  args: {
    customerId: parseInt(process.env.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
    engineId: parseInt(process.env.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <CludoSearchBar {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
