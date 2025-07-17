import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromoBanner from './PromoBanner';
import { PromoBannerData } from './PromoBanner.storydata';

const meta: Meta<typeof PromoBanner> = {
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

export default meta;
type Story = StoryObj<typeof PromoBanner>;

export const PromoBannerExample: Story = {
  args: PromoBannerData,
  parameters: {
    viewport: {
      defaultViewport: 'default',
    },
  },
};

export const PromoBannerMobileExample: Story = {
  args: PromoBannerData,
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};
