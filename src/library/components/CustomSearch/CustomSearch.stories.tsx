import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CustomSearch from './CustomSearch';
import { CustomSearchProps } from './CustomSearch.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import { ExampleCustomSearchProps } from './CustomSearch.storydata';

export default {
  title: 'Library/Components/CustomSearch',
  component: CustomSearch,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<CustomSearchProps> = (args) => (
  <SBPadding>
    <CustomSearch {...args} />
  </SBPadding>
);

export const ExampleCustomSearch = Template.bind({});
ExampleCustomSearch.args = ExampleCustomSearchProps;

export const ExampleCustomSearchWithLabel = Template.bind({});
ExampleCustomSearchWithLabel.args = { ...ExampleCustomSearchProps, hasHiddenLabel: false };

export const ExampleCustomSearchWithId = Template.bind({});
ExampleCustomSearchWithId.args = { ...ExampleCustomSearchProps, id: 'myCustomId' };
