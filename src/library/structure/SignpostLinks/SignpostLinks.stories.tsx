import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SignpostLinks from './SignpostLinks';

const meta: Meta<typeof SignpostLinks> = {
  title: 'library/Structure/Signpost Links',
  component: SignpostLinks,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignpostLinks>;

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
  render: (args) => (
    <>
      <p>
        <i>
          Make sure you have the right theme chosen for the corresponding example, otherwise this might not work right.
        </i>
      </p>
      <SignpostLinks {...args} />
    </>
  ),
};

export const WestSignpostLinksExample: Story = {
  ...NorthSignpostLinksExample,
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

export const SignpostLinksExample2: Story = {
  ...NorthSignpostLinksExample,
  args: {
    signpostLinksArray: [
      {
        sovereignCode: 2,
        areaName: 'Daventry',
        url: '/',
      },
      {
        sovereignCode: 6,
        areaName: 'South Northamptonshire',
        cta_text: 'Area with optional CTA text',
        url: 'https://www.southnorthants.gov.uk/',
      },
    ],
  },
};

export const SignpostLinksExample1: Story = {
  ...NorthSignpostLinksExample,
  args: {
    signpostLinksArray: [
      {
        sovereignCode: 2,
        areaName: 'Daventry',
        cta_text: 'Custom CTA text for Daventry',
        url: '/test',
      },
    ],
  },
};
