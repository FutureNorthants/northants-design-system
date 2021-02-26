
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PhaseBanner from "./PhaseBanner";
import { PhaseBannerProps } from "./PhaseBanner.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Phase Banner"
};

const Template: Story<PhaseBannerProps> = (args) => <PhaseBanner {...args} />;


export const PhaseBannerExample = Template.bind({});    


export const PhaseBannerHomeExample = Template.bind({});    
PhaseBannerHomeExample.args = {
    isHome: true
}