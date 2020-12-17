
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import TitledLinkList from "./TitledLinkList";
import { TitledLinkListProps } from "./TitledLinkList.types";
import { SBPadding } from '../../../../.storybook/SBPadding'; 

export default {
  title: 'Library/Components/Title Linked list',
  component: TitledLinkList
};


const Template: Story<TitledLinkListProps> = (args) => <SBPadding><TitledLinkList {...args} /></SBPadding>;

export const ExampleSection = Template.bind({});    
ExampleSection.args = {
  Title: "Pages in this section",
  Sections: [
    {
        SectionTitle: "Your bins and rubbish",
        SectionLinks: [
            {
                title: "Contact the council",
                url: "/",
                isCurrent: true
            },
            {
                title: "Give feedback on our services",
                url: "/"
            },
            {
                title: "Requesting information from the council",
                url: "/"
            },
            {
                title: "Privacy",
                url: "/"
            },
            {
                title: "Policies",
                url: "/"
            }
        ]
    }
  ]
};

export const ExampleMultipleSections = Template.bind({});    
ExampleMultipleSections.args = {
  Title: "Pages in this section",
  Sections: [
    {
        SectionTitle: "Your bins and rubbish",
        SectionLinks: [
            {
                title: "Contact the council",
                url: "/",
                isCurrent: true
            },
            {
                title: "Give feedback on our services",
                url: "/"
            },
            {
                title: "Requesting information from the council",
                url: "/"
            },
            {
                title: "Privacy",
                url: "/"
            },
            {
                title: "Policies",
                url: "/"
            }
        ]
    },

    {
        SectionTitle: "Your bins and rubbish",
        SectionLinks: [
            {
                title: "Contact the council",
                url: "/",
                isCurrent: true
            },
            {
                title: "Give feedback on our services",
                url: "/"
            },
            {
                title: "Requesting information from the council",
                url: "/"
            },
            {
                title: "Privacy",
                url: "/"
            },
            {
                title: "Policies",
                url: "/"
            }
        ]
    }
  ]
};

export const ExampleRelated = Template.bind({});    
ExampleRelated.args = {
  Title: "Also found in",
  Sections: [
      {
        SectionLinks: [
            {
                title: "Bin collection, recycling and waste",
                url: "/"
            }
        ]
      }
  ]
};


export const ExampleReallyLongLinkText = Template.bind({});    
ExampleReallyLongLinkText.args = {
  Title: "Really long link text example",
  Sections: [
    {
        SectionLinks: [
            {
                title: "Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
                url: "/"
            },
            {
                title: "Contact the council",
                url: "/"
            },
            {
                title: "Give feedback on our services",
                url: "/"
            },
            {
                title: "Requesting information from the council",
                url: "/"
            },
            {
                title: "Privacy",
                url: "/"
            },
            {
                title: "Policies",
                url: "/"
            }
        ]
    }
    ]
};