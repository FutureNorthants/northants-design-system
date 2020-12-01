import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { LegacySiteExample, LegacySiteExampleProps } from './LegacySiteExample';

export default {
  title: 'Page Examples/Legacy Site Example',
  component: LegacySiteExample,
} as Meta;

const Template: Story<LegacySiteExampleProps> = (args) => <LegacySiteExample {...args} />;

export const ExampleHome = Template.bind({});