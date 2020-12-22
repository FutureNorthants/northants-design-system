import React from "react";
import HintText from "./HintText";
import { HintTextProps } from "./HintText.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Forms - Hint text',
    component: HintText
};

const Template: Story<HintTextProps> = (args) => <SBPadding><MaxWidthContainer><HintText {...args} /></MaxWidthContainer></SBPadding>;

export const Example = Template.bind({});
Example.args = {
  text: "Example hint text"
};
