import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';
import Promotions from './Promotions';
import { PromoBlockProps } from '../../structure/PromoBlock/PromoBlock.types';
import { PromoBlocksData } from '../../structure/PromoBlock/PromoBlock.storydata';

export default {
  title: 'library/Slices/Promotions',
  component: Promotions,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<PromoBlockProps> = (args) => (
  <SBPadding>
    <Promotions {...args} />
  </SBPadding>
);

export const PromotionsExampleBannerOnly = Template.bind({});
PromotionsExampleBannerOnly.args = { promos: PromoBlocksData.slice(0, 1) };

export const PromotionsExampleBannerAnd2Promos = Template.bind({});
PromotionsExampleBannerAnd2Promos.args = { promos: PromoBlocksData.slice(0, 3) };

export const PromotionsExampleBannerAnd3Promos = Template.bind({});
PromotionsExampleBannerAnd3Promos.args = { promos: PromoBlocksData.slice(0, 4) };
