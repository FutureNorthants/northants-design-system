import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import PostCodeSearchApollo from './PostCodeSearchApollo';
import { PostCodeSearchApolloProps } from './PostCodeSearchApollo.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import AddressSearchProvider from '../../contexts/AddressSearchProvider/AddressSearchProvider';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Prototypes/PostCodeSearchApollo',
  component: PostCodeSearchApollo,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<PostCodeSearchApolloProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <AddressSearchProvider>
        <PostCodeSearchApollo {...args} otherCouncilLink="https://www.westnorthants.gov.uk" />
      </AddressSearchProvider>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExamplePostCodeSearchApollo = Template.bind({});
ExamplePostCodeSearchApollo.args = {};

export const AnotherExamplePostCodeSearchApollo = Template.bind({});
AnotherExamplePostCodeSearchApollo.args = {};
