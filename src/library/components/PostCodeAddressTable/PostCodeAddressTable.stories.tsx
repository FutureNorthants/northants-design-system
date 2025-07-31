import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PostCodeAddressTable from './PostCodeAddressTable';
import { PostCodeAddressProvider } from './../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import PostCodeAddressSearch from '../PostCodeAddressSearch/PostCodeAddressSearch';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof PostCodeAddressTable> = {
  title: 'Library/Prototypes/Post Code Address Table',
  component: PostCodeAddressTable,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostCodeAddressTable>;

export const ExamplePostCodeAddressTable: Story = {
  render: (args) => (
    <MaxWidthContainer>
      <PostCodeAddressProvider>
        <PostCodeAddressSearch />
        <PostCodeAddressTable {...args} />
      </PostCodeAddressProvider>
    </MaxWidthContainer>
  ),
};
