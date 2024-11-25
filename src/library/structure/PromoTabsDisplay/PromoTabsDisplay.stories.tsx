import React from 'react';
import { StoryFn } from '@storybook/react';
import PromoTabsDisplay from './PromoTabsDisplay';
import { PromoTabsDisplayProps } from './PromoTabsDisplay.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { PromoBlocksData } from '../PromoBlock/PromoBlock.storydata';

export default {
  title: 'Library/Structure/Promo Tabs Display',
  component: PromoTabsDisplay,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PromoTabsDisplayProps> = (args) => (
  <SBPadding>
    <p>On tablet and desktop it should display PromoTabs and on mobile it should display PromoBlock.</p>
    <hr />
    <PromoTabsDisplay {...args} />
  </SBPadding>
);

export const ExamplePromoTabsDisplay = Template.bind({});
ExamplePromoTabsDisplay.args = {
  promos: PromoBlocksData,
};
