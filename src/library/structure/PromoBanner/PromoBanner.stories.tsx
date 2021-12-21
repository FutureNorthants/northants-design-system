import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PromoBanner from "./PromoBanner";
import { PromoBannerProps } from "./PromoBanner.types";
import { SBPadding } from '../../../../.storybook/SBPadding';
import { PromoBannerContent, PromoBannerData } from "./PromoBanner.storydata";

export default {
    title: "library/Structure/Promo Banner",
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<PromoBannerProps> = (args) => <SBPadding><PromoBanner {...args}>{PromoBannerContent}</PromoBanner></SBPadding>;
export const PromoBannerExample = Template.bind({});    
PromoBannerExample.args = PromoBannerData;
