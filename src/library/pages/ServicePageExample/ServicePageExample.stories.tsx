import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { StoryFn, Meta } from '@storybook/react';
import { ServicePageExample, ServicePageExampleProps } from './ServicePageExample';
import { ContentsExampleData } from '../../structure/Contents/Contents.storydata';

export default {
  title: 'Page Examples/Service Page Example',
  component: ServicePageExample,
} as Meta;

const Template: StoryFn<ServicePageExampleProps> = (args) => <ServicePageExample {...args} />;

export const ServicePageWithContent = Template.bind({});

export const ServicePageWithServiceAlert = Template.bind({});
ServicePageWithServiceAlert.args = {
  showServiceAlert: true,
};

export const ServicePageWithContents = Template.bind({});
ServicePageWithContents.args = {
  contents: {
    currentPath: '/second-page',
    contents: ContentsExampleData,
  },
};

export const ServicePageWithContentsAndAlert = Template.bind({});
ServicePageWithContentsAndAlert.args = {
  contents: {
    currentPath: '/second-page',
    contents: ContentsExampleData,
  },
  showServiceAlert: true,
};
