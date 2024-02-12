import React from 'react';
import { StoryFn } from '@storybook/react';
import BinCollection from './BinCollection';
import { BinCollectionProps } from './BinCollection.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Components/BinCollection',
  component: BinCollection,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<BinCollectionProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <BinCollection {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleBinCollection = Template.bind({});
ExampleBinCollection.args = {
  address: '4A ANGEL STREET, NORTHAMPTON, NN1 1ED',
  binCollections: [
    {
      date: '2024-02-09',
      type: 'food',
    },
    {
      date: '2024-02-09',
      type: 'garden',
    },
    {
      date: '2024-02-09',
      type: 'recycling',
    },
    {
      date: '2024-02-16',
      type: 'recycling_boxes',
    },
    {
      date: '2024-02-16',
      type: 'waste',
    },
    {
      date: '2024-02-16',
      type: 'sacks',
    },
  ],
};
