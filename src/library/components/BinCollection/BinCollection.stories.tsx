import React from 'react';
import { StoryFn } from '@storybook/react';
import BinCollection from './BinCollection';
import { BinCollectionProps } from './BinCollection.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import dayjs from 'dayjs';

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

const now = dayjs();

export const ExampleBinCollection = Template.bind({});
ExampleBinCollection.args = {
  address: '4A ANGEL STREET, NORTHAMPTON, NN1 1ED',
  binCollections: [
    {
      date: now.add(5, 'day').format('YYYY-MM-DD'),
      type: 'food',
    },
    {
      date: now.add(6, 'day').format('YYYY-MM-DD'),
      type: 'garden',
    },
    {
      date: now.add(10, 'day').format('YYYY-MM-DD'),
      type: 'recycling',
    },
    {
      date: now.add(14, 'day').format('YYYY-MM-DD'),
      type: 'recycling_boxes',
    },
    {
      date: now.add(14, 'day').format('YYYY-MM-DD'),
      type: 'waste',
    },
    {
      date: now.add(21, 'day').format('YYYY-MM-DD'),
      type: 'sacks',
    },
  ],
  calendar: 'https://www.southnorthants.gov.uk/download/downloads/id/7346/bin-collection-calendar-2022.pdf',
  calendarSize: '0.2MB',
};
