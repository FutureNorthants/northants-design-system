import React from 'react';
// also exported from '@storybook/react-webpack5' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CouncilTaxParishPageExample, CouncilTaxParishPageExampleProps } from './CouncilTaxParishPageExample';

export default {
  title: 'Page Examples/Council Tax By Parish',
  component: CouncilTaxParishPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<CouncilTaxParishPageExampleProps> = (args) => <CouncilTaxParishPageExample {...args} />;
export const AlphabeticalList = Template.bind({});
AlphabeticalList.args = {};
