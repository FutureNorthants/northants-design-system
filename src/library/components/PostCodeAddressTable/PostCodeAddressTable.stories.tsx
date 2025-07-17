import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import PostCodeAddressTable from './PostCodeAddressTable';
import { PostCodeAddressTableProps } from './PostCodeAddressTable.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { PostCodeAddressProvider } from './../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import PostCodeAddressSearch from '../PostCodeAddressSearch/PostCodeAddressSearch';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
export default {
  title: 'Library/Prototypes/Post Code Address Table',
  component: PostCodeAddressTable,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PostCodeAddressTableProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PostCodeAddressProvider>
        <PostCodeAddressSearch />
        <PostCodeAddressTable {...args} />
      </PostCodeAddressProvider>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExamplePostCodeAddressTable = Template.bind({});
ExamplePostCodeAddressTable.args = {};
