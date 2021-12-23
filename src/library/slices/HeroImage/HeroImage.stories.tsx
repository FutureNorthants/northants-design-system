import React from "react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Library/Slices/Hero Image",
  component: HeroImage,
  parameters: {
    status: {
      type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<HeroImageProps> = (args) => (
  <HeroImage {...args}></HeroImage>
);

const CommonArgs = {
  imageLarge:
    "https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg",
  imageSmall:
    "https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg",
};

export const HeroImageExampleBoxed = Template.bind({});
HeroImageExampleBoxed.args = {
  headline: "Brixworth Country Park",
  content:
    "<p>Brixworth Country Park opened in 1997 and lies next to Pitsford Water in Northamptonshire.</p>",
  callToActionText: "Find out more",
  callToActionURL:
    "https://www.northamptonshireparks.co.uk/brixworth-country-park/Pages/default.aspx",
  backgroundBox: true,
  ...CommonArgs,
};

export const HeroImageExampleGradient = Template.bind({});
HeroImageExampleGradient.args = {
  headline: "Brixworth Country Park",
  content: "Lady's Lane, Northampton, NN1 3AH",
  callToActionText: "View in Google Maps",
  callToActionURL:
    "https://www.google.com/maps/place/Brixworth+Country+Park/@52.3185866,-0.8979503,17z/data=!3m1!4b1!4m5!3m4!1s0x48770c8a05a094d5:0x7967b834f2732438!8m2!3d52.3185833!4d-0.8957616",
  backgroundBox: false,
  ...CommonArgs,
};
