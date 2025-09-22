import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Promotions from './Promotions';
import { PromoBlocksData } from '../../structure/PromoBlock/PromoBlock.storydata';

const meta: Meta<typeof Promotions> = {
  title: 'library/Slices/Promotions',
  component: Promotions,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PromotionsExampleBannerOnly: Story = {
  args: { promos: PromoBlocksData.slice(0, 1) },
};

export const PromotionsExampleBannerAnd2Promos: Story = {
  args: { promos: PromoBlocksData.slice(0, 3) },
};

export const PromotionsExampleBannerAnd3Promos: Story = {
  args: { promos: PromoBlocksData.slice(0, 4) },
};
