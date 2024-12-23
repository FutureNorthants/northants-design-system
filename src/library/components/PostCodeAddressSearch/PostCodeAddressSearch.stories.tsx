import React from 'react';
import PostCodeAddressSearch from './PostCodeAddressSearch';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { PostCodeAddressProvider } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';

const meta: Meta<typeof PostCodeAddressSearch> = {
  title: 'Library/Prototypes/Post Code Address Search',
  component: PostCodeAddressSearch,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCodeAddressSearch>;

const value = {
  postcodeValue: {
    state: '',
  },
  resultsValue: {
    state: {},
  },
};

export const PostCodeAddressSearchExample: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <PostCodeAddressProvider>
        <PostCodeAddressSearch {...args} />
      </PostCodeAddressProvider>
    </MaxWidthContainer>
  ),
};
