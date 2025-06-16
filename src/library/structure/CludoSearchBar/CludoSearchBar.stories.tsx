import React from 'react';
import { StoryFn } from '@storybook/react';
import CludoSearchBar from './CludoSearchBar';
import { CludoSearchBarProps } from './CludoSearchBar.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import PageMain from '../PageMain/PageMain';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Structure/Cludo Search Bar',
  component: CludoSearchBar,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<CludoSearchBarProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <CludoSearchBar {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleCludoSearchBar = Template.bind({});
ExampleCludoSearchBar.args = {
  customerId: parseInt(process.env.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
  engineId: parseInt(process.env.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
};
