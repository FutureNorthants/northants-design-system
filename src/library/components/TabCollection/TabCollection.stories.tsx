import React from 'react';
import { StoryFn } from '@storybook/react';
import TabCollection from './TabCollection';
import { TabCollectionProps } from './TabCollection.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
//import AlphabeticalDirectory from '../AlphabeticalDirectory/AlphabeticalDirectory';
//import BinCollection from '../BinCollection/BinCollection';
//import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
//import PageMain from '../../structure/PageMain/PageMain';
//import SignpostLinksList from '../SignpostLinksList/SignpostLinksList';

import { tab1, tab2, tab3, tabData, tab1Data, tab2Data, tab3Data } from './TabCollection.storydata';

export default {
  title: 'Library/Components/TabCollection',
  component: TabCollection,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<TabCollectionProps> = (args) => (
  <SBPadding>
    <TabCollection {...args} />
  </SBPadding>
);

export const ExampleTab1Collection = Template.bind({});
ExampleTab1Collection.args = {
  tabCollectionContents: tab1Data,
};

export const ExampleTab2Collection = Template.bind({});
ExampleTab2Collection.args = {
  tabCollectionContents: tab2Data,
};

export const ExampleTab3Collection = Template.bind({});
ExampleTab3Collection.args = {
  tabCollectionContents: tab3Data,
};

export const ExampleTab123Collection = Template.bind({});
ExampleTab123Collection.args = {
  tabCollectionContents: tabData,
};

/*
export const ExampleTab1Collection = Template.bind({});
ExampleTabCollection.args = {
  TabCollectionContents: [tab1],
};

export const ExampleTab2Collection = Template.bind({});
ExampleTabCollection.args = {
  TabCollectionContents: [tab2],
};

export const ExampleTab3Collection = Template.bind({});
ExampleTabCollection.args = {
  TabCollectionContents: [tab3],
};

/* 

    <SBPadding>
      <MaxWidthContainer>
        <PageMain>

        </PageMain>
      </MaxWidthContainer>
    </SBPadding>,

*/
