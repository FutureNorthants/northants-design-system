
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SignpostLinks from "./SignpostLinks";
import { SignpostLinksProps } from "./SignpostLinks.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Signpost Links"
};

const Template: Story<SignpostLinksProps> = (args) => <SBPadding><SignpostLinks {...args} /></SBPadding>;

export const NorthSignpostLinksExample = Template.bind({});    
NorthSignpostLinksExample.args = {
    SignpostLinksArray: [
        {
            areaName: "Corby",
            url: "/"
        },
        {
            areaName: "East Northamptonshire",
            url: "/"
        },
        {
            areaName: "Kettering",
            url: "/"
        },
        {
            areaName: "Wellingborough",
            url: "/"
        }
    ]
};


export const WestSignpostLinksExample = Template.bind({});    
WestSignpostLinksExample.args = {
    SignpostLinksArray: [
        {
            areaName: "Daventry",
            url: "/"
        },
        {
            areaName: "Northampton",
            url: "/"
        },
        {
            areaName: "South Northamptonshire",
            url: "/"
        }
    ]
};
