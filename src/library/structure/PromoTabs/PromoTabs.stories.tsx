import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

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
