import React from 'react';
import { StoryFn } from '@storybook/react';
import Tab from './Tab';
import { TabProps } from './Tab.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
//import { Map } from '../Map/Map';
//import { Wrapper } from '@googlemaps/react-wrapper';
import AlphabeticalDirectory from '../AlphabeticalDirectory/AlphabeticalDirectory';
import BinCollection from '../BinCollection/BinCollection';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import SignpostLinksList from '../SignpostLinksList/SignpostLinksList';

export default {
  title: 'Library/Components/Tab',
  component: Tab,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<TabProps> = (args) => (
  <SBPadding>
    <Tab {...args} />
  </SBPadding>
);

export const ExampleLoneTab = Template.bind({});
ExampleLoneTab.args = {
  tabName: 'Individual Tab',
  tabIndex: 0,
  tabSizeInPixels: 200,
  tabColour: 'yellow',
  tabTextColour: 'blue',
  zIndex: 0,
  onClickFn: () => {
    alert('hello!');
  },
  children: (
    <AlphabeticalDirectory
      data={[
        {
          children: [
            {
              title: 'Aardvark',
              url: '#',
            },
            {
              title: 'Aardvark',
              url: '#',
            },
            {
              title: 'Aardvark',
              url: '#',
            },
            {
              title: 'Aardvark',
              url: '#',
            },
            {
              title: 'Abyssinian',
              url: '#',
            },
            {
              title: 'Adelie Penguin',
              url: '#',
            },
            {
              title: 'African Bullfrog',
              url: '#',
            },
            {
              title: 'Anteater',
              url: '#',
            },
            {
              title: 'Anteater',
              url: '#',
            },
            {
              title: 'Anteater',
              url: '#',
            },
            {
              title: 'Anteater',
              url: '#',
            },
            {
              title: 'Anteater',
              url: '#',
            },
          ],
          group: 'a',
        },
        {
          children: [
            {
              title: 'Cat',
              url: '#',
            },
            {
              title: 'Creepy crawlie',
              url: '#',
            },
          ],
          group: 'c',
        },
        {
          children: [
            {
              title: 'Guinea pig',
              url: '#',
            },
          ],
          group: 'g',
        },
        {
          children: [
            {
              title: 'Zebra',
              url: '#',
            },
          ],
          group: 'z',
        },
      ]}
    />
  ),
};

export const ExampleIndentedTab = Template.bind({});
ExampleIndentedTab.args = {
  tabName: 'Indented Tab',
  tabIndex: 1,
  tabSizeInPixels: 200,
  tabColour: 'pink',
  tabTextColour: 'blue',
  zIndex: 0,
  onClickFn: () => {
    alert('hello!');
  },
  children: (
    <SBPadding>
      <MaxWidthContainer>
        <PageMain>
          <BinCollection
            address="4A ANGEL STREET, NORTHAMPTON, NN1 1ED"
            binCollections={[
              {
                date: '2025-02-26',
                type: 'food',
              },
              {
                date: '2025-02-26',
                type: 'garden',
              },
              {
                date: '2025-03-03',
                type: 'recycling',
              },
              {
                date: '2025-03-07',
                type: 'recycling_boxes',
              },
              {
                date: '2025-03-07',
                type: 'waste',
              },
              {
                date: '2025-03-14',
                type: 'sacks',
              },
            ]}
            calendar="https://www.southnorthants.gov.uk/download/downloads/id/7346/bin-collection-calendar-2022.pdf"
            calendarSize="0.2MB"
          />
        </PageMain>
      </MaxWidthContainer>
    </SBPadding>
  ),
};

export const ExampleFurtherIndentedTab = Template.bind({});
ExampleFurtherIndentedTab.args = {
  tabName: 'More Indented Tab',
  tabIndex: 2,
  tabSizeInPixels: 200,
  tabColour: 'lightgreen',
  tabTextColour: 'blue',
  zIndex: 0,
  onClickFn: () => {
    alert('hello!');
  },
  children: (
    <SBPadding>
      <SignpostLinksList
        signpostLinksArray={[
          {
            areaName: 'Corby',
            sovereignCode: 1,
            url: '/',
          },
          {
            areaName: 'East Northamptonshire',
            sovereignCode: 3,
            url: '/',
          },
          {
            areaName: 'Kettering',
            sovereignCode: 4,
            url: '/',
          },
          {
            areaName: 'Wellingborough',
            sovereignCode: 7,
            url: '/',
          },
        ]}
      />
    </SBPadding>
  ),
};
