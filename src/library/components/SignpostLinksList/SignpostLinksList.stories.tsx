
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SignpostLinksList from "./SignpostLinksList";
import { SignpostLinksListProps } from "./SignpostLinksList.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: "library/Components/Signpost Links List"
};

const Template: Story<SignpostLinksListProps> = (args) => <SBPadding><SignpostLinksList {...args} /></SBPadding>;

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
