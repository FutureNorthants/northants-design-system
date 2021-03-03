
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import LoadingSpinner from "./LoadingSpinner";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: 'Library/Components/Loading Spinner',
    component: LoadingSpinner
};

const Template: Story<LoadingSpinnerProps> = (args) => <SBPadding><LoadingSpinner {...args} /></SBPadding>;

export const ExampleLoadingSpinner = Template.bind({});    
ExampleLoadingSpinner.args = {
};
