
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SectionLinksMobileContents from "./SectionLinksMobileContents";
import { SectionLinksMobileContentsProps } from "./SectionLinksMobileContents.types";
import PageMain from "../PageMain/PageMain"
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer"

export default {
    title: "library/Structure/Section Links Mobile Contents",
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<SectionLinksMobileContentsProps> = (args) => <PageMain><MaxWidthContainer><SectionLinksMobileContents {...args} /> Only viewable at mobile screen size or via the keyboard</MaxWidthContainer></PageMain>;


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
