import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CouncilTaxParishPageExample, CouncilTaxParishPageExampleProps } from './CouncilTaxParishPageExample';

export default {
  title: 'Page Examples/Council Tax Prototypes/By Parish',
  component: CouncilTaxParishPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
} as Meta;

const Template: Story<CouncilTaxParishPageExampleProps> = (args) => <CouncilTaxParishPageExample {...args} />;

export const VersionD = Template.bind({});
VersionD.args = {
}
