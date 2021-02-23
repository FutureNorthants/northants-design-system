
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
    signpostLinksArray: [
        {
            sovereignCode: 1,
            areaName: "Corby",
            url: "/"
        },
        {
            sovereignCode: 3,
            areaName: "East Northamptonshire",
            url: "/"
        },
        {
            sovereignCode: 4,
            areaName: "Kettering",
            url: "/"
        },
        {
            sovereignCode: 7,
            areaName: "Wellingborough",
            url: "/"
        }
    ]
};

export const WestSignpostLinksExample = Template.bind({});    
WestSignpostLinksExample.args = {
    signpostLinksArray: [
        {
            sovereignCode: 2,
            areaName: "Daventry",
            url: "/"
        },
        {
            sovereignCode: 5,
            areaName: "Northampton",
            url: "/"
        },
        {
            sovereignCode: 6,
            areaName: "South Northamptonshire",
            url: "/"
        }
    ]
};



export const SignpostLinksExample2 = Template.bind({});    
SignpostLinksExample2.args = {
    signpostLinksArray: [
        {
            sovereignCode: 2,
            areaName: "Daventry",
            url: "/"
        },
        {
            sovereignCode: 5,
            areaName: "Northampton",
            url: "/"
        }
    ]
};

export const SignpostLinksExample1 = Template.bind({});    
SignpostLinksExample1.args = {
    signpostLinksArray: [
        {
            sovereignCode: 2,
            areaName: "Daventry",
            url: "/test"
        }
    ]
};
