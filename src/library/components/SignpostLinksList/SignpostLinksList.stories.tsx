import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SignpostLinksList from './SignpostLinksList';

const meta: Meta<typeof SignpostLinksList> = {
  title: 'library/Components/Signpost Links List',
  component: SignpostLinksList,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignpostLinksList>;

export const NorthSignpostLinksExample: Story = {
  args: {
    signpostLinksArray: [
      {
        sovereignCode: 1,
        areaName: 'Corby',
        url: '/',
      },
      {
        sovereignCode: 3,
        areaName: 'East Northamptonshire',
        url: '/',
      },
      {
        sovereignCode: 4,
        areaName: 'Kettering',
        url: '/',
      },
      {
        sovereignCode: 7,
        areaName: 'Wellingborough',
        url: '/',
      },
    ],
  },
};

export const WestSignpostLinksExample: Story = {
  args: {
    signpostLinksArray: [
      {
        sovereignCode: 2,
        areaName: 'Daventry',
        url: '/',
      },
      {
        sovereignCode: 5,
        areaName: 'Northampton',
        url: '/',
      },
      {
        sovereignCode: 6,
        areaName: 'South Northamptonshire',
        url: '/',
      },
    ],
  },
};
