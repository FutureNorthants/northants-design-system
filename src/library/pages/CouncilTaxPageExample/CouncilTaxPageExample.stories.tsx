import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CouncilTaxPageExample, CouncilTaxPageExampleProps } from './CouncilTaxPageExample';

export default {
  title: 'Page Examples/Council Tax Prototypes/By Address',
  component: CouncilTaxPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    }
  },
} as Meta;

const Template: Story<CouncilTaxPageExampleProps> = (args) => <CouncilTaxPageExample {...args} />;

export const VersionB = Template.bind({});
VersionB.args = {
  version: 'b'
}

export const VersionC = Template.bind({});
VersionC.args = {
  version: 'c'
}
