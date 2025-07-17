import React from 'react';
import PostCodeSearch from './PostCodeSearch';
import { PostCodeSearchProps } from './PostCodeSearch.types';
import { StoryFn } from '@storybook/react-webpack5';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Postcode Search',
  component: PostCodeSearch,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PostCodeSearchProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PostCodeSearch {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const Example = Template.bind({});
Example.args = {
  otherCouncilLink: 'https://www.westnorthants.gov.uk',
};
