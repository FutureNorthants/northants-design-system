
import React from "react";
import { StoryFn } from '@storybook/react';
import MovableDiv from "./MovableDiv";
import { MovableDivProps } from "./MovableDiv.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/MovableDiv',
    component: MovableDiv,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: StoryFn<MovableDivProps> = (args) => <SBPadding><MovableDiv {...args} /></SBPadding>;

export const ExampleMovableDiv = Template.bind({});    
ExampleMovableDiv.args = {
  foo: "bar"
};

export const AnotherExampleMovableDiv = Template.bind({});    
AnotherExampleMovableDiv.args = {
  foo: "foo"
};
