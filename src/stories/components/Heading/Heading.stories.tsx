import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { SBPadding } from '../../../../.storybook/SBPadding';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading
} as Meta;

const Template: Story<HeadingProps> = (args) => <SBPadding><Heading {...args} /></SBPadding>;

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  text: "Heading 1"
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  text: "Heading 2"
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  text: "Heading 3"
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  text: "Heading 4"
};
