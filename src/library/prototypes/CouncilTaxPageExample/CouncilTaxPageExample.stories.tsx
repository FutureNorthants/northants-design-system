import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CouncilTaxPageExample, CouncilTaxPageExampleProps } from './CouncilTaxPageExample';

export default {
  title: 'Prototypes/Council Tax',
  component: CouncilTaxPageExample,
} as Meta;

const Template: Story<CouncilTaxPageExampleProps> = (args) => <CouncilTaxPageExample {...args} />;

export const CouncilTaxVersionBExample = Template.bind({});
CouncilTaxVersionBExample.args = {
  version: 'b'
}

export const CouncilTaxVersionCExample = Template.bind({});
CouncilTaxVersionCExample.args = {
  version: 'c'
}
