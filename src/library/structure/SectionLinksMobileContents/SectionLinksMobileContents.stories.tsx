
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SectionLinksMobileContents from "./SectionLinksMobileContents";
import { SectionLinksMobileContentsProps } from "./SectionLinksMobileContents.types";
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
    title: "library/Structure/Section Links Mobile Contents"
};

const Template: Story<SectionLinksMobileContentsProps> = (args) => <SBPadding><SectionLinksMobileContents {...args} /> Only viewable at mobile screen size</SBPadding>;


export const SectionLinksMobileContentsExample = Template.bind({});    
SectionLinksMobileContentsExample.args = {
    sectionLinksArray: [
        {
            title: "Your bins and rubbish",
            id: "your-bins-and-rubbish"
          },
          {
            title: "Street cleaning",
            id: "street-cleaning"
          },
          {
            title: "Business, commercial and clinical waste",
            id: "business-commercial-and-clinical-waste"
          }
    ]
};
