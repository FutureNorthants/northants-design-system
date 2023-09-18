import React from 'react';
import BinCollection from './BinCollection';
import { BinCollectionProps } from './BinCollection.types';
import { Story } from '@storybook/react/types-6-0';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Bin Collection',
  component: BinCollection,
  parameters: {
    status: {
      type: 'stable',
    },
  },
};

const Template: Story<BinCollectionProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <BinCollection {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleBinCollectionSearch = Template.bind({});

ExampleBinCollectionSearch.args = {
  title: 'Enter your postcode for bin collection details',
  formError: false,
};
