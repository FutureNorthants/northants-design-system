import React from 'react';
import PostCodeSearch from './PostCodeSearch';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof PostCodeSearch> = {
  title: 'Library/Components/Postcode Search',
  component: PostCodeSearch,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCodeSearch>;

export const Example: Story = {
  args: {
    otherCouncilLink: 'https://www.westnorthants.gov.uk',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PostCodeSearch {...args} />
    </MaxWidthContainer>
  ),
};
