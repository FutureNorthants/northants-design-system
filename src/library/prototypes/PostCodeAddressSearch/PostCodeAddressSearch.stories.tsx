import React from "react";
import PostCodeAddressSearch from "./PostCodeAddressSearch";
import { PostCodeAddressSearchProps } from "./PostCodeAddressSearch.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Prototypes/Post Code Address Search',
    component: PostCodeAddressSearch
};

const Template: Story<PostCodeAddressSearchProps> = (args) => <SBPadding><MaxWidthContainer><PostCodeAddressSearch {...args} /></MaxWidthContainer></SBPadding>;

export const PostCodeAddressSearchExample = Template.bind({});
PostCodeAddressSearchExample.args = {
};
