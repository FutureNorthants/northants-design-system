
import React from "react";
import { StoryFn } from '@storybook/react';
import TabsWithContents from "./TabsWithContents";
import { TabsWithContentsProps } from "./TabsWithContents.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/TabsWithContents',
    component: TabsWithContents,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: StoryFn<TabsWithContentsProps> = (args) => <SBPadding><TabsWithContents {...args} /></SBPadding>;

export const ExampleTabsWithContents = Template.bind({});    
ExampleTabsWithContents.args = {
  foo: "bar"
};

export const AnotherExampleTabsWithContents = Template.bind({});    
AnotherExampleTabsWithContents.args = {
  foo: "foo"
};
