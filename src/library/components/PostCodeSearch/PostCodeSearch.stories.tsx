import React from "react";
import PostCodeSearch from "./PostCodeSearch";
import { PostCodeSearchProps } from "./PostCodeSearch.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Post Code Search',
    component: PostCodeSearch,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<PostCodeSearchProps> = (args) => <SBPadding><MaxWidthContainer><PostCodeSearch {...args} /></MaxWidthContainer></SBPadding>;

export const Example = Template.bind({});
Example.args = {
};
