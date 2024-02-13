import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react';

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
  title: 'Find your bin collection',
};
