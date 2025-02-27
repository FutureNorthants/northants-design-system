import React, { useState } from 'react';
import Tab from '../../components/Tab/Tab';
import SignpostLinksList from '../../components/SignpostLinksList/SignpostLinksList';
import { SBPadding } from '../../../../.storybook/SBPadding';
import AlphabeticalDirectory from '../../components/AlphabeticalDirectory/AlphabeticalDirectory';
import { MaxWidthContainer } from '../../structure/PageStructures';
import BinCollection from '../../components/BinCollection/BinCollection';
import { PageMain } from '../../structure/PageStructures';

export interface TabbedPageExampleProps {}

export const TabbedPageExample: React.FunctionComponent<TabbedPageExampleProps> = () => {
  const [ZIndexOffset, setZIndexOffset] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  /*
  const handleClick = () => {
    alert('hello!');
    setZIndexOffset(ZIndexOffset + 10);
    setActiveTab(0);
  };
*/
  return (
    <>
      <Tab
        tabName="My Test Tab"
        tabIndex={0}
        activeTabIndex={activeTabIndex}
        tabSizeInPixels={200}
        tabColour="yellow"
        tabTextColour="black"
        zIndex={2}
        onClickFn={() => {
          setActiveTabIndex(0);
        }}
      >
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
      </Tab>
      <Tab
        tabName="My Test Tab2"
        tabIndex={1}
        activeTabIndex={activeTabIndex}
        tabSizeInPixels={200}
        tabColour="lightgreen"
        tabTextColour="black"
        zIndex={0}
        onClickFn={() => {
          setActiveTabIndex(1);
        }}
      >
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
      </Tab>
      <Tab
        tabName="My Test Tab3"
        tabIndex={2}
        activeTabIndex={activeTabIndex}
        tabSizeInPixels={200}
        tabColour="lightblue"
        tabTextColour="black"
        zIndex={1}
        onClickFn={() => {
          setActiveTabIndex(2);
        }}
      >
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
      </Tab>
    </>
  );
};
