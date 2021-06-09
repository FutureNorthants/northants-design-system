import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CouncilTaxParishPageExample, CouncilTaxParishPageExampleProps } from './CouncilTaxParishPageExample';

export default {
  title: 'Prototypes/Council Tax Version D Parish List',
  component: CouncilTaxParishPageExample,
} as Meta;

const Template: Story<CouncilTaxParishPageExampleProps> = (args) => <CouncilTaxParishPageExample {...args} />;

export const CouncilTaxParishExample = Template.bind({});
CouncilTaxParishExample.args = {
}
