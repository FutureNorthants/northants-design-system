import React from 'react';
import { StoryFn } from '@storybook/react';
import BinFinder from './BinFinder';
import { BinFinderProps } from './BinFinder.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

export default {
  title: 'Library/Slices/Bin Finder',
  component: BinFinder,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<BinFinderProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <BinFinder {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleBinFinder = Template.bind({});
ExampleBinFinder.args = {
  title: 'Find your bin collection day',
  contactUrl: 'https://www.westnorthants.gov.uk/your-council/contact-us/contact-details',
  contactInfo: (
    <p>
      We have no bin collection details for this address. If you think this is wrong, please{' '}
      <a href="https://www.westnorthants.gov.uk/your-council/contact-us/contact-details">contact us</a>
    </p>
  ),
};
