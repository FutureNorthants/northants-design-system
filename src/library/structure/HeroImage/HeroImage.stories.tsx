import React from 'react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';
import { Story } from '@storybook/react/types-6-0';
import {
  HeroImageExampleGradientData,
  HeroImageExampleBoxedData,
  HeroImageExampleMicroSiteData,
  HeroImageExampleBoxedWithBreadcrumbData,
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

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args}></HeroImage>;

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
