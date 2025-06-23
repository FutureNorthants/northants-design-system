import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ServicePageExample, ServicePageExampleProps } from './ServicePageExample';
import { ContentsExampleData } from '../../structure/Contents/Contents.storydata';

const meta: Meta<typeof ServicePageExample> = {
  title: 'Page Examples/Service Page Example',
  component: ServicePageExample,
} as Meta;

export default meta;
type Story = StoryObj<typeof ServicePageExample>;

export const ServicePageWithContent: Story = {
  parameters: {
    pageLayout: 'page',
  },
};

export const ServicePageWithServiceAlert: Story = {
  args: {
    showServiceAlert: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ServicePageWithContents: Story = {
  args: {
    contents: {
      currentPath: '/second-page',
      contents: ContentsExampleData,
    },
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ServicePageWithContentsAndAlert: Story = {
  args: {
    contents: {
      currentPath: '/second-page',
      contents: ContentsExampleData,
    },
    showServiceAlert: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};
