import React from "react";
import FormWithLine from "./FormWithLine";
import { FormWithLineProps } from "./FormWithLine.types";
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Forms - Form container with line',
    component: FormWithLine,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<FormWithLineProps> = (args) => <SBPadding><MaxWidthContainer><FormWithLine {...args}>Test content</FormWithLine></MaxWidthContainer></SBPadding>;

export const Example = Template.bind({});
Example.args = {
};
