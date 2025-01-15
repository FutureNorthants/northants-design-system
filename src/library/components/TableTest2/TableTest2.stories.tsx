
import React from "react";
import { StoryFn } from '@storybook/react';
import TableTest2 from "./TableTest2";
import { TableTest2Props } from "./TableTest2.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/TableTest2',
    component: TableTest2,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: StoryFn<TableTest2Props> = (args) => <SBPadding><TableTest2 {...args} /></SBPadding>;

export const ExampleTableTest2 = Template.bind({});    
ExampleTableTest2.args = {
  foo: "bar"
};

export const AnotherExampleTableTest2 = Template.bind({});    
AnotherExampleTableTest2.args = {
  foo: "foo"
};
