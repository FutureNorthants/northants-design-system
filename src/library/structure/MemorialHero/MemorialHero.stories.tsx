
import React from "react";
import { Story } from '@storybook/react/types-6-0';
import MemorialHero from "./MemorialHero";
import { MemorialHeroProps } from "./MemorialHero.types";
import { SBPadding } from '../../../../.storybook/SBPadding';
import ServicesLinksList from "../ServicesLinksList/ServicesLinksList";
import PromotedLinks from "../../components/PromotedLinks/PromotedLinks";
import { GDS_theme, north_theme, west_theme, lb_theme_north, lb_theme_west } from './../../../themes/theme_generator';
import styled, { ThemeProvider } from "styled-components";

export default {
    title: 'Library/Structure/MemorialHero',
    component: MemorialHero
};

const Template: Story<MemorialHeroProps> = (args) => <ThemeProvider theme={lb_theme_north}><MemorialHero {...args} /></ThemeProvider>;




const serviceLinksArray = [
    {
      title: "Condolence book", 
      url: "/",
      iconKey: "covid",
      quickLinksArray: [
        {
          title: "Sign the condolence book and leave a tribute", 
          url: "/",
        }
      ]
    },
];

export const ExampleMemorialHero = Template.bind({});    
ExampleMemorialHero.args = {
    src: "http://placehold.it/1000x700",
    placeholder: "http://placehold.it/250x175",
    alt: "Image showing ...",
    children: <ServicesLinksList hasBackground={true} hideHeader={true} serviceLinksArray={serviceLinksArray} oneCol={true} />,
    councilServices: <PromotedLinks oneCol={true}  promotedLinksArray={[
        {
            title: "Proceed to Council services",
            url: "/"
        },
       ]} />,
    theme:  north_theme,
};
