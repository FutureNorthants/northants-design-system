import React from 'react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';
import { StoryFn } from '@storybook/react';
import {
  HeroImageExampleGradientData,
  HeroImageExampleBoxedData,
  HeroImageExampleMicroSiteData,
  HeroImageExampleBoxedWithBreadcrumbData,
  HeroImageExampleBoxedWithCustomSearch,
} from './HeroImage.storydata';

export default {
  title: 'Library/Structure/Hero Image',
  component: HeroImage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    headline: {
      table: { category: 'Text' },
    },
    content: {
      table: { category: 'Text' },
    },
    callToActionText: {
      table: { category: 'Link' },
    },
    callToActionURL: {
      table: { category: 'Link' },
    },
    backgroundBox: {
      table: { category: 'Presentation' },
    },
    imageLarge: {
      table: { category: 'Image' },
    },
    imageSmall: {
      table: { category: 'Image' },
    },
    imageAltText: {
      table: { category: 'Image' },
    },
  },
};

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args}></HeroImage>;

export const HeroImageExampleBoxed = Template.bind({});
HeroImageExampleBoxed.args = HeroImageExampleBoxedData;

export const HeroImageExampleGradient = Template.bind({});
HeroImageExampleGradient.args = HeroImageExampleGradientData;

export const HeroImageExampleGradientTitleOnly = Template.bind({});
HeroImageExampleGradientTitleOnly.args = {
  headline: 'Example Microsite Title',
  ...HeroImageExampleMicroSiteData,
};

export const HeroImageWithBreadcrumb = Template.bind({});
HeroImageWithBreadcrumb.args = HeroImageExampleBoxedWithBreadcrumbData;

export const HeroImageWithCustomSearch = Template.bind({});
HeroImageWithCustomSearch.args = HeroImageExampleBoxedWithCustomSearch;
