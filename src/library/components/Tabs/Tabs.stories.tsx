import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import Tabs from './Tabs';
import { TabsProps } from './Tabs.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/Tabs',
  component: Tabs,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabProps, setTabProps] = useState([
    {
      title: 'All results',
      onClick: () => {
        setActiveTab(0);
      },
    },
    {
      title: 'Service results',
      onClick: () => {
        setActiveTab(1);
      },
    },
    {
      title: 'News results',
      onClick: () => {
        setActiveTab(2);
      },
    },
  ]);

  return (
    <SBPadding>
      <MaxWidthContainer>
        <PageMain>
          <Tabs tabs={tabProps} activeTab={activeTab} />
        </PageMain>
      </MaxWidthContainer>
    </SBPadding>
  );
};

export const ExampleTabs = Template.bind({});
ExampleTabs.args = {};
