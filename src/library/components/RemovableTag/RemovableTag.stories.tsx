
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import RemovableTag from "./RemovableTag";
import { RemovableTagProps } from "./RemovableTag.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/components/Removable Tag',
    component: RemovableTag
};

const Template: Story<RemovableTagProps> = (args) => <SBPadding><RemovableTag {...args} /></SBPadding>;

export const ExampleRemovableTag = Template.bind({});    
ExampleRemovableTag.args = {
  label: "Bins",
  value: "bins"
};
