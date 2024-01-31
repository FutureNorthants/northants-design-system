import React from 'react';
import { StoryFn } from '@storybook/react';
import PostCodeAddressDropdown from './PostCodeAddressDropdown';
import { PostCodeAddressDropdownProps } from './PostCodeAddressDropdown.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { PostCodeAddressProvider } from './../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import PostCodeAddressSearch from '../PostCodeAddressSearch/PostCodeAddressSearch';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
export default {
  title: 'Library/Prototypes/Post Code Address Dropdown',
  component: PostCodeAddressDropdown,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PostCodeAddressDropdownProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PostCodeAddressProvider>
        <PostCodeAddressSearch />
        <PostCodeAddressDropdown {...args} />
      </PostCodeAddressProvider>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExamplePostCodeAddressDropdown = Template.bind({});
ExamplePostCodeAddressDropdown.args = {};
