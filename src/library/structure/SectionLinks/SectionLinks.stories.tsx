
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import SectionLinks from "./SectionLinks";
import { SectionLinksProps } from "./SectionLinks.types";
import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";

export default {
    title: "Library/Structure/Section Links"
};

const Template: Story<SectionLinksProps> = (args) => <MaxWidthContainer><SectionLinks {...args} /></MaxWidthContainer>;

export const ExampleSectionLinks = Template.bind({});    
ExampleSectionLinks.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 3", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 4", 
      summary: "summary", 
      url: "/"
    }
  ]
};


export const ExampleSectionLinksWithoutTitle = Template.bind({});    
ExampleSectionLinksWithoutTitle.args = {
  sectionTitle: "Section title",
  sectionSlug: "section-title",
  displayTitle: false,
  pageLinksArray: [ 
    {
      title: "Title", 
      summary: "summary", 
      url: "/"
    },
    {
      title: "Title 2", 
      summary: "summary", 
      url: "/"
    }
  ]
};
