
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PhaseBanner from "./PhaseBanner";
import { PhaseBannerProps } from "./PhaseBanner.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Phase Banner"
};

const Template: Story<PhaseBannerProps> = (args) => <SBPadding><PhaseBanner {...args} /></SBPadding>;


export const PhaseBannerExample = Template.bind({});    

