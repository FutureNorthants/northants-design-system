import React from 'react';
import PostCodeAddressSearch from './PostCodeAddressSearch';
import { PostCodeAddressSearchProps } from './PostCodeAddressSearch.types';
import { StoryFn } from '@storybook/react-webpack5';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { PostCodeAddressProvider } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
export default {
  title: 'Library/Prototypes/Post Code Address Search',
  component: PostCodeAddressSearch,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const value = {
  postcodeValue: {
    state: '',
  },
  resultsValue: {
    state: {},
  },
};

const Template: StoryFn<PostCodeAddressSearchProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PostCodeAddressProvider value={value}>
        <PostCodeAddressSearch {...args} />
      </PostCodeAddressProvider>
    </MaxWidthContainer>
  </SBPadding>
);

export const PostCodeAddressSearchExample = Template.bind({});
PostCodeAddressSearchExample.args = {};
