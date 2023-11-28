import React from 'react';
import { StoryFn } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'library/Structure/Breadcrumbs',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<BreadcrumbsProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <Breadcrumbs {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const BreadcrumbsExample1 = Template.bind({});
BreadcrumbsExample1.args = {
  breadcrumbsArray: [
    {
      title: 'Home',
      url: '/',
    },
  ],
};

export const BreadcrumbsExample2 = Template.bind({});
BreadcrumbsExample2.args = {
  breadcrumbsArray: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Service landing page',
      url: '#2',
    },
  ],
};

export const BreadcrumbsExample3 = Template.bind({});
BreadcrumbsExample3.args = {
  breadcrumbsArray: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Service landing page',
      url: '#2',
    },
    {
      title: 'Service page parent',
      url: '#3',
    },
  ],
};

export const BreadcrumbsExample4 = Template.bind({});
BreadcrumbsExample4.args = {
  breadcrumbsArray: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Service landing page',
      url: '#2',
    },
    {
      title: 'Service page parent',
      url: '#3',
    },
    {
      title: 'Sub service page',
      url: '#4',
    },
  ],
};

export const BreadcrumbsWithMargin = Template.bind({});
BreadcrumbsWithMargin.args = {
  hasMargin: true,
  breadcrumbsArray: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Service landing page',
      url: '#2',
    },
  ],
};
