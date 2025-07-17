import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromoTabs from './PromoTabs';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';
import { PromoBlocksData } from '../PromoBlock/PromoBlock.storydata';

const meta: Meta<typeof PromoTabs> = {
  title: 'Library/Structure/Promo Tabs',
  component: PromoTabs,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromoTabs>;

export const ExamplePromoTabs: Story = {
  args: {
    promos: PromoBlocksData,
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <PromoTabs {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
