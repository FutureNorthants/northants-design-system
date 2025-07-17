import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PostCodeAddressDropdown from './PostCodeAddressDropdown';
import { PostCodeAddressProvider } from './../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import PostCodeAddressSearch from '../PostCodeAddressSearch/PostCodeAddressSearch';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof PostCodeAddressDropdown> = {
  title: 'Library/Prototypes/Post Code Address Dropdown',
  component: PostCodeAddressDropdown,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCodeAddressDropdown>;

export const ExamplePostCodeAddressDropdown: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <PostCodeAddressProvider>
        <PostCodeAddressSearch />
        <PostCodeAddressDropdown {...args} />
      </PostCodeAddressProvider>
    </MaxWidthContainer>
  ),
};
