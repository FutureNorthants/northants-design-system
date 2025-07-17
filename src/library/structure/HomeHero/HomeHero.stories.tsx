import React from 'react';
import HomeHero from './HomeHero';
import { HomeHeroProps } from './HomeHero.types';
import { StoryFn } from '@storybook/react-webpack5';
import { HomeHeroCommon, HomeHeroPromotedLinks } from './HomeHero.storydata';
import Header from '../Header/Header';
import { ExamplePromotedServicesData } from '../PromotedServicesTabs/PromotedServicesTabs.storydata';

export default {
  title: 'Library/structure/Home Hero',
  component: HomeHero,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    topline: {
      table: { category: 'Banner area' },
    },
    imageOverrideLogo: {
      table: { category: 'Banner area' },
    },
    imageOverrideLogoAltText: {
      table: { category: 'Banner area' },
    },
    strapline: {
      table: { category: 'Banner area' },
    },
    imagesArray: {
      table: { category: 'Hero images' },
    },
    promotedLinksArray: {
      table: { category: 'Hero buttons' },
    },
    searchSuggestions: {
      table: { category: 'Search' },
    },
  },
};

const Template: StoryFn<HomeHeroProps> = (args) => (
  <>
    <HomeHero {...args}></HomeHero>
  </>
);

export const HomeHeroExample0Links = Template.bind({});
HomeHeroExample0Links.args = {
  promotedLinksArray: [],
  ...HomeHeroCommon,
};

export const HomeHeroExample1Link = Template.bind({});
HomeHeroExample1Link.args = {
  promotedLinksArray: HomeHeroPromotedLinks.slice(0, 1),
  ...HomeHeroCommon,
};

export const HomeHeroExample2Links = Template.bind({});
HomeHeroExample2Links.args = {
  promotedLinksArray: HomeHeroPromotedLinks.slice(0, 2),
  ...HomeHeroCommon,
};

export const HomeHeroExample3Links = Template.bind({});
HomeHeroExample3Links.args = {
  promotedLinksArray: HomeHeroPromotedLinks.slice(0, 3),
  ...HomeHeroCommon,
};

export const HomeHeroExample4Links = Template.bind({});
HomeHeroExample4Links.args = {
  promotedLinksArray: HomeHeroPromotedLinks.slice(0, 4),
  ...HomeHeroCommon,
};

export const HomeHeroExampleOverriddenLogo = Template.bind({});
HomeHeroExampleOverriddenLogo.args = {
  promotedLinksArray: HomeHeroPromotedLinks.slice(0, 4),
  ...HomeHeroCommon,
  imageOverrideLogo: 'http://placehold.it/520x150',
  imageOverrideLogoAltText: 'My logo',
};

export const HomeHeroHasTabs = Template.bind({});
HomeHeroHasTabs.args = {
  promotedLinksArray: HomeHeroPromotedLinks.slice(0, 4),
  promotedServicesTabs: ExamplePromotedServicesData,
  showSearch: false,
  ...HomeHeroCommon,
};
