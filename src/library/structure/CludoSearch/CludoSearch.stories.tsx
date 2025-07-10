import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import CludoSearch from './CludoSearch';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof CludoSearch> = {
  title: 'Library/Structure/Cludo Search',
  component: CludoSearch,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CludoSearch>;

export const ExampleCludoSearch: Story = {
  args: {
    searchTerm: 'test',
    customerId: parseInt(process.env.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
    engineId: parseInt(process.env.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <CludoSearch {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
