
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PostCodeSearchApollo from "./PostCodeSearchApollo";
import { PostCodeSearchApolloProps } from "./PostCodeSearchApollo.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/PostCodeSearchApollo',
    component: PostCodeSearchApollo,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<PostCodeSearchApolloProps> = (args) => <SBPadding><PostCodeSearchApollo {...args} /></SBPadding>;

export const ExamplePostCodeSearchApollo = Template.bind({});    
ExamplePostCodeSearchApollo.args = {
  foo: "bar"
};

export const AnotherExamplePostCodeSearchApollo = Template.bind({});    
AnotherExamplePostCodeSearchApollo.args = {
  foo: "foo"
};
