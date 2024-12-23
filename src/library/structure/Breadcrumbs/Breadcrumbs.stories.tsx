import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'library/Structure/Breadcrumbs',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const BreadcrumbsExample1: Story = {
  args: {
    breadcrumbsArray: [
      {
        title: 'Home',
        url: '/',
      },
    ],
  },
  render: (args) => (
    <MaxWidthContainer>
      <Breadcrumbs {...args} />
    </MaxWidthContainer>
  ),
};

export const BreadcrumbsExample2: Story = {
  ...BreadcrumbsExample1,
  args: {
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
  },
};

export const BreadcrumbsExample3: Story = {
  ...BreadcrumbsExample1,
  args: {
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
  },
};

export const BreadcrumbsExample4: Story = {
  ...BreadcrumbsExample1,
  args: {
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
  },
};

export const BreadcrumbsWithMargin: Story = {
  ...BreadcrumbsExample1,
  args: {
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
  },
};
