import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SignpostPageExample, SignpostPageExampleProps } from './SignpostPageExample';

const meta: Meta<typeof SignpostPageExample> = {
  title: 'Page Examples/Signpost Page Examples',
  component: SignpostPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignpostPageExample>;

export const FindYourBinCollectionDayNorthExample: Story = {
  args: {
    signpostLinksArrayExample: [
      {
        sovereignCode: 1,
        areaName: 'Corby',
        url: 'https://www.corby.gov.uk/home/environmental-services/street-scene/household-waste-and-recycling',
      },
      {
        sovereignCode: 3,
        areaName: 'East Northamptonshire',
        url: 'https://www.east-northamptonshire.gov.uk/info/200084/recycling_rubbish_and_waste',
      },
      {
        sovereignCode: 4,
        areaName: 'Kettering',
        url: 'https://www.kettering.gov.uk/info/20012/recycling_rubbish_and_waste',
      },
      {
        sovereignCode: 7,
        areaName: 'Wellingborough',
        url: 'http://www.wellingborough.gov.uk/site/scripts/home_info.php?homepageID=77',
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const FindYourBinCollectionDayWestExample: Story = {
  args: {
    signpostLinksArrayExample: [
      {
        sovereignCode: 2,
        areaName: 'Daventry',
        url: 'https://www.daventrydc.gov.uk/',
      },
      {
        sovereignCode: 5,
        areaName: 'Northampton',
        url: 'https://www.northampton.gov.uk/',
      },
      {
        sovereignCode: 6,
        areaName: 'South Northamptonshire',
        url: 'https://www.southnorthants.gov.uk/',
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const FindYourBinCollectionDaySingleExample: Story = {
  args: {
    signpostLinksArrayExample: [
      {
        sovereignCode: 2,
        areaName: 'Northamptonshire County Council',
        cta_text: 'Find your bin collection day',
        url: 'https://www.northamptonshire.gov.uk/',
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const SingleExampleWithServiceAlert: Story = {
  args: {
    showServiceAlert: true,
    signpostLinksArrayExample: [
      {
        sovereignCode: 2,
        areaName: 'Northamptonshire County Council',
        cta_text: 'Find your bin collection day',
        url: 'https://www.northamptonshire.gov.uk/',
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};
