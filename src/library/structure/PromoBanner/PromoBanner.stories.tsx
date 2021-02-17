
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import PromoBanner from "./PromoBanner";
import { PromoBannerProps } from "./PromoBanner.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/PromoBanner"
};

const Template: Story<PromoBannerProps> = (args) => <SBPadding><PromoBanner {...args} /></SBPadding>;


export const PromoBannerExample = Template.bind({});    
PromoBannerExample.args = {
    PromoBannerArray: [
        {
            title: "Home",
            url: "/"
        }
    ]
};

