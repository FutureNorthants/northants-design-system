import React from 'react';
import { StoryFn } from '@storybook/react';
import PageWrapper from './PageWrapper';
import { PageWrapperProps } from './PageWrapper.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/PageWrapper',
  component: PageWrapper,
};

const Template: StoryFn<PageWrapperProps> = (args) => (
  <SBPadding>
    <PageWrapper {...args} />
  </SBPadding>
);

export const ExamplePageWrapper = Template.bind({});
ExamplePageWrapper.args = {
  colour: 'grey',
};
