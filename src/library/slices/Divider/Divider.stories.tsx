
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Divider from "./Divider";
import { DividerProps } from "./Divider.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Slices/Divider',
    component: Divider,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<DividerProps> = (args) => <SBPadding><Divider {...args} /></SBPadding>;

export const ExampleDivider = Template.bind({});    