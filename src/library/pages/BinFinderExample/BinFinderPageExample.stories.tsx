import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Meta, StoryObj } from '@storybook/react';
import { BinFinderPageExample } from './BinFinderPageExample';

const meta: Meta<typeof BinFinderPageExample> = {
  title: 'Page Examples/Bin Collection Day',
  component: BinFinderPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BinFinderPageExample>;

export const BinFinderExamplePage: Story = {
  args: {
    title: 'Find your bin collection day',
    contactInfo: `
    <p>
      We have no bin collection details for this address. If you think this is wrong, please 
      <a href="https://www.westnorthants.gov.uk/your-council/contact-us/contact-details">contact us</a>
    </p>
  `,
  },
  parameters: {
    pageLayout: 'page',
  },
};
