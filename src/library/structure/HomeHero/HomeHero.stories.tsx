
import React from "react";
import HomeHero from "./HomeHero";
import { HomeHeroProps } from "./HomeHero.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/structure/Home Hero',
    component: HomeHero
};

const Template: Story<HomeHeroProps> = (args) => <HomeHero {...args}></HomeHero>;

export const HeroHomeExample = Template.bind({});
HeroHomeExample.args = {
    promotedLinksArray: [
        {
            title: "Make a payment",
            url: "/"
        },
        {
            title: "Contact the council",
            url: "/"
        },
        {
            title: "About our new website",
            url: "/"
        }
    ],
    imagesArray: [
        {
            image1440x810: "http://placehold.it/1440x810",
            image144x81: "http://placehold.it/144x81"
        },
        {
            image1440x810: "http://placehold.it/1340x810",
            image144x81: "http://placehold.it/134x81"
        },
        {
            image1440x810: "http://placehold.it/1240x810",
            image144x81: "http://placehold.it/124x81"
        },
        {
            image1440x810: "http://placehold.it/1140x810",
            image144x81: "http://placehold.it/114x81"
        }
    ]
};
