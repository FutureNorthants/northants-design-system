import React from 'react';
import HomeHero from './HomeHero';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeHeroCommon, HomeHeroPromotedLinks } from './HomeHero.storydata';
import { ExamplePromotedServicesData } from '../PromotedServicesTabs/PromotedServicesTabs.storydata';

const meta: Meta<typeof HomeHero> = {
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

export default meta;
type Story = StoryObj<typeof HomeHero>;

export const HomeHeroExample0Links: Story = {
  args: {
    promotedLinksArray: [],
    ...HomeHeroCommon,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const HomeHeroExample1Link: Story = {
  ...HomeHeroExample0Links,
  args: {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 1),
    ...HomeHeroCommon,
  },
};

export const HomeHeroExample2Links: Story = {
  ...HomeHeroExample0Links,
  args: {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 2),
    ...HomeHeroCommon,
  },
};

export const HomeHeroExample3Links: Story = {
  ...HomeHeroExample0Links,
  args: {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 3),
    ...HomeHeroCommon,
  },
};

export const HomeHeroExample4Links: Story = {
  ...HomeHeroExample0Links,
  args: {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 4),
    ...HomeHeroCommon,
  },
};

export const HomeHeroExampleOverriddenLogo: Story = {
  ...HomeHeroExample0Links,
  args: {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 4),
    ...HomeHeroCommon,
    imageOverrideLogo: 'http://placehold.it/520x150',
    imageOverrideLogoAltText: 'My logo',
  },
};

export const HomeHeroHasTabs: Story = {
  ...HomeHeroExample0Links,
  args: {
    promotedLinksArray: HomeHeroPromotedLinks.slice(0, 4),
    promotedServicesTabs: ExamplePromotedServicesData,
    showSearch: false,
    ...HomeHeroCommon,
  },
};
