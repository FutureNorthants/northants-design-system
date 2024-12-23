import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromotedServicesTabs from './PromotedServicesTabs';
import PromotedServicesTabContent from './PromotedServicesTabContent';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';
import { ExamplePromotedServicesData } from './PromotedServicesTabs.storydata';

const meta: Meta<typeof PromotedServicesTabs> = {
  title: 'Library/Structure/PromotedServicesTabs',
  component: PromotedServicesTabs,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromotedServicesTabs>;

export const ExamplePromotedServicesTabs: Story = {
  args: ExamplePromotedServicesData,
  render: (args) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
      <MaxWidthContainer>
        <PageMain>
          <PromotedServicesTabs {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
          <PromotedServicesTabContent {...args} activeTab={activeTab} setActiveTab={setActiveTab} />
        </PageMain>
      </MaxWidthContainer>
    );
  },
};
