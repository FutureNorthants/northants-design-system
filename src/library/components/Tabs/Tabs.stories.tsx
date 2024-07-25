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
  return (
    <SBPadding>
      <MaxWidthContainer>
        <PageMain>
          <Tabs {...args} />
        </PageMain>
      </MaxWidthContainer>
    </SBPadding>
  );
};

export const ExampleTabs = Template.bind({});
ExampleTabs.args = {
  tabs: [
    {
      title: 'All results',
      content: '<p>Some info about all results.</p>',
    },
    {
      title: 'Service results',
      content: '<p>Some info about service results.</p>',
    },
    {
      title: 'News results',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet eleifend ante, ut pretium nibh laoreet ac.</p>',
    },
  ],
};
