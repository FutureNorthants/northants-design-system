
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import Footer from "./Footer";
import { FooterProps } from "./Footer.types";

export default {
    title: "library/Structure/Footer",
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const ExampleFooter = Template.bind({});    
ExampleFooter.args = {
  footerLinksArray: [
    {
      title: "About",
      url: "/"
    },
    {
      title: "Accessibility",
      url: "/"
    },
    {
      title: "Cookies",
      url: "/"
    },
    {
      title: "Contact us",
      url: "/"
    },
    {
      title: "Jobs",
      url: "/"
    },
    {
      title: "Newsletter",
      url: "/"
    }
  ]
};

export const ExampleFooterWithoutLinks = Template.bind({});    
ExampleFooterWithoutLinks.args = {

};
