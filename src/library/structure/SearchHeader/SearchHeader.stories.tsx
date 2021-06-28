
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SearchHeader from "./SearchHeader";
import { SearchHeaderProps } from "./SearchHeader.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/structure/Search header',
    component: SearchHeader,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<SearchHeaderProps> = (args) => <SBPadding><SearchHeader {...args} /></SBPadding>;

export const ExampleSearchHeader = Template.bind({});    