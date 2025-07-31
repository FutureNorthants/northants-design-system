import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import PromoBanner from './PromoBanner';
import { PromoBannerProps } from './PromoBanner.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { PromoBannerContent, PromoBannerData } from './PromoBanner.storydata';

export default {
  title: 'library/Structure/Promo Banner',
  component: PromoBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    image1440x810: {
      table: { category: 'Image' },
    },
    image144x81: {
      table: { category: 'Image' },
    },
    title: {
      table: { category: 'Content' },
    },
    children: {
      table: { category: 'Content' },
    },
    ctaText: {
      table: { category: 'Call to Action' },
    },
    ctaUrl: {
      table: { category: 'Call to Action' },
    },
  },
};

const Template: StoryFn<PromoBannerProps> = (args) => (
  <SBPadding>
    <PromoBanner {...args}>{PromoBannerContent}</PromoBanner>
  </SBPadding>
);
export const PromoBannerExample = Template.bind({});
PromoBannerExample.args = PromoBannerData;

export const PromoBannerMobileExample = Template.bind({});
PromoBannerMobileExample.args = PromoBannerData;
PromoBannerMobileExample.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
