import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromoTabsDisplay from './PromoTabsDisplay';
import { PromoBlocksData } from '../PromoBlock/PromoBlock.storydata';

const meta: Meta<typeof PromoTabsDisplay> = {
  title: 'Library/Structure/Promo Tabs Display',
  component: PromoTabsDisplay,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromoTabsDisplay>;

export const ExamplePromoTabsDisplay: Story = {
  args: {
    promos: PromoBlocksData,
  },
  render: (args) => (
    <>
      <p>On tablet and desktop it should display PromoTabs and on mobile it should display PromoBlock.</p>
      <hr />
      <PromoTabsDisplay {...args} />
    </>
  ),
};
