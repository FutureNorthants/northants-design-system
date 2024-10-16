import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import PromotedServicesTabs from './PromotedServicesTabs';
import PromotedServicesTabContent from './PromotedServicesTabContent';
import { PromotedServicesTabsProps } from './PromotedServicesTabs.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';
import { ExamplePromotedServicesData } from './PromotedServicesTabs.storydata';

export default {
  title: 'Library/Structure/PromotedServicesTabs',
  component: PromotedServicesTabs,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<PromotedServicesTabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <SBPadding>
      <MaxWidthContainer>
        <PageMain>
          <PromotedServicesTabs {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
          <PromotedServicesTabContent {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
        </PageMain>
      </MaxWidthContainer>
    </SBPadding>
  );
};

export const ExamplePromotedServicesTabs = Template.bind({});
ExamplePromotedServicesTabs.args = ExamplePromotedServicesData;
