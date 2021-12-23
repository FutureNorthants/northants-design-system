import React from "react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/Slices/Hero Image',
    component: HeroImage,
    parameters: {
      status: {
        type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args}></HeroImage>;

const CommonArgs = {
    imageLarge: "https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg",
    imageSmall: "https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg",
}

export const HeroImageExampleBoxed = Template.bind({});
HeroImageExampleBoxed.args = {
    headline: "Brixworth Country Park",
    content: "<p>Brixworth Country Park opened in 1997 and lies next to Pitsford Water in Northamptonshire.</p><p>Show blurb about what you can do there.</p>",
    callToActionText: "Call to action",
    callToActionURL: "/",
    backgroundBox: true,
    ...CommonArgs
};

export const HeroImageExampleGradient = Template.bind({});
HeroImageExampleGradient.args = {
    headline: "Brixworth Country Park",
    content: "Lady's Lane, Northampton, NN1 3AH",
    callToActionText: "View in Google Maps",
    callToActionURL: "/",
    backgroundBox: false,
    ...CommonArgs
};
