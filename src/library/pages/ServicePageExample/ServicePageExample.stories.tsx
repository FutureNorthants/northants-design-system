import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ServicePageExample, ServicePageExampleProps } from './ServicePageExample';

export default {
  title: 'Page Examples/Service Page Example',
  component: ServicePageExample,
} as Meta;

const Template: Story<ServicePageExampleProps> = (args) => <ServicePageExample {...args} />;

export const ExamplePageWithContent = Template.bind({});