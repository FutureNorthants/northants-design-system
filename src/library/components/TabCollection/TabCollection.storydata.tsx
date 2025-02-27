import React from 'react';
import { TabCollectionContentProps, TabCollectionProps } from './TabCollection.types';
import BinCollection from '../BinCollection/BinCollection';
import AlphabeticalDirectory from '../AlphabeticalDirectory/AlphabeticalDirectory';
import SignpostLinksList from '../SignpostLinksList/SignpostLinksList';
import { SBPadding } from '../../../../.storybook/SBPadding';
/*

export interface TabCollectionContentProps {
  tabName: string;

  tabContents: React.ReactElement;
}

export interface TabCollectionProps {
  tabCollectionContents: Array<TabCollectionContentProps>;
}
*/

export const tab1: TabCollectionContentProps = {
  tabName: 'a',
  tabColour: 'yellow',
  tabTextColour: 'black',
  tabContents: (
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
  ),
};

export const tab2: TabCollectionContentProps = {
  tabName: 'b',
  tabColour: 'cyan',
  tabTextColour: 'black',
  tabContents: (
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

export const tab3: TabCollectionContentProps = {
  tabName: 'c',
  tabColour: 'pink',
  tabTextColour: 'black',
  tabContents: (
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

export const tab1Data: TabCollectionContentProps[] = [tab1];

export const tab2Data: TabCollectionContentProps[] = [tab2];

export const tab3Data: TabCollectionContentProps[] = [tab3];

export const tabData: TabCollectionContentProps[] = [tab1, tab2, tab3];
