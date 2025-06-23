import React from 'react';
import { StoryFn } from '@storybook/react';
import CludoSearch from './CludoSearch';
import { CludoSearchProps } from './CludoSearch.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Structure/Cludo Search',
  component: CludoSearch,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<CludoSearchProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <CludoSearch {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleCludoSearch = Template.bind({});
ExampleCludoSearch.args = {
  searchTerm: 'test',
  customerId: parseInt(process.env.NEXT_PUBLIC_CLUDO_CUSTOMER_ID ?? ''),
  engineId: parseInt(process.env.NEXT_PUBLIC_CLUDO_ENGINE_ID ?? ''),
};
