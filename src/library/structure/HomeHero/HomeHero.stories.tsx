import React from "react";
import HomeHero from "./HomeHero";
import { HomeHeroProps } from "./HomeHero.types";
import { Story } from '@storybook/react/types-6-0';

export default {
    title: 'Library/structure/Home Hero',
    component: HomeHero,
    parameters: {
      status: {
        type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      }
    },
};

const Template: Story<HomeHeroProps> = (args) => <HomeHero {...args}></HomeHero>;

export const HomeHeroExample = Template.bind({});

const CommonArgs = {
    searchSuggestions: ['Apple', 'Orange', 'Lemon', 'Pear', 'Peach', 'Kiwifruit is a hairy little fruit from China and this expands nicely to fit on other lines', 
    'Killer tomato', 'Kinetic energy weapon', 'Kid gloves', 'Kiora', 'Kidderminster'],
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
}


HomeHeroExample.args = {
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
    ...CommonArgs
};


export const HomeHeroExample1Link = Template.bind({});
HomeHeroExample1Link.args = {
    promotedLinksArray: [
        {
            title: "Make a payment",
            url: "/"
        }
    ],
    ...CommonArgs
};

export const HomeHeroExample2Links = Template.bind({});
HomeHeroExample2Links.args = {
    promotedLinksArray: [
        {
            title: "Coronavirus (COVID-19)",
            url: "/"
        },
        {
            title: "Make a payment",
            url: "/"
        }
    ],
    ...CommonArgs
};

export const HomeHeroExample4Links = Template.bind({});
HomeHeroExample4Links.args = {
    promotedLinksArray: [
        {
            title: "Coronavirus (COVID-19)",
            url: "/"
        },
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
    ...CommonArgs
};


export const HomeHeroExample0Links = Template.bind({});
HomeHeroExample0Links.args = {
    promotedLinksArray: [
    ],
    ...CommonArgs
};
