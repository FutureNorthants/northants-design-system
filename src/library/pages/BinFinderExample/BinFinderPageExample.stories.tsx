import React from 'react';
// also exported from '@storybook/react-webpack5' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react-webpack5';

import { BinFinderPageExample, BinFinderPageExampleProps } from './BinFinderPageExample';

export default {
  title: 'Page Examples/Bin Collection Day',
  component: BinFinderPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<BinFinderPageExampleProps> = (args) => <BinFinderPageExample {...args} />;

export const BinFinderExample = Template.bind({});
BinFinderExample.args = {
  title: 'Find your bin collection day',
  contactInfo: `
    <p>
      We have no bin collection details for this address. If you think this is wrong, please 
      <a href="https://www.westnorthants.gov.uk/your-council/contact-us/contact-details">contact us</a>
    </p>
  `,
};
