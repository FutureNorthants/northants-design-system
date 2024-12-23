import React from 'react';
import HeroImage from './HeroImage';
import type { Meta, StoryObj } from '@storybook/react';
import {
  HeroImageExampleGradientData,
  HeroImageExampleBoxedData,
  HeroImageExampleMicroSiteData,
  HeroImageExampleBoxedWithBreadcrumbData,
  HeroImageExampleBoxedWithCustomSearch,
} from './HeroImage.storydata';

const meta: Meta<typeof HeroImage> = {
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

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const HeroImageExampleBoxed: Story = {
  args: HeroImageExampleBoxedData,
  parameters: {
    pageLayout: 'page',
  },
};

export const HeroImageExampleGradient: Story = {
  ...HeroImageExampleBoxed,
  args: HeroImageExampleGradientData,
};

export const HeroImageExampleGradientTitleOnly: Story = {
  ...HeroImageExampleBoxed,
  args: {
    headline: 'Example Microsite Title',
    ...HeroImageExampleMicroSiteData,
  },
};

export const HeroImageWithBreadcrumb: Story = {
  ...HeroImageExampleBoxed,
  args: HeroImageExampleBoxedWithBreadcrumbData,
};

export const HeroImageWithCustomSearch: Story = {
  ...HeroImageExampleBoxed,
  args: HeroImageExampleBoxedWithCustomSearch,
};
