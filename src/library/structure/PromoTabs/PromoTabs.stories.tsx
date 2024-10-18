import React from 'react';
import { StoryFn } from '@storybook/react';
import PromoTabs from './PromoTabs';
import { PromoTabsProps } from './PromoTabs.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';
import { PromoBlocksData } from '../PromoBlock/PromoBlock.storydata';

export default {
  title: 'Library/Structure/Promo Tabs',
  component: PromoTabs,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PromoTabsProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <PromoTabs {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExamplePromoTabs = Template.bind({});
ExamplePromoTabs.args = {
  promos: PromoBlocksData,
};
