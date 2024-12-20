import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BinFinder from './BinFinder';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof BinFinder> = {
  title: 'Library/Slices/Bin Finder',
  component: BinFinder,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof BinFinder>;

export const ExampleBinFinder: Story = {
  args: {
    title: 'Find your bin collection day',
    contactInfo: `
    <p>
      We have no bin collection details for this address. If you think this is wrong, please 
      <a href="https://www.westnorthants.gov.uk/your-council/contact-us/contact-details">contact us</a>
    </p>
  `,
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <BinFinder {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};
