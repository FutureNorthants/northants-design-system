import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DirectoryServicePage } from './DirectoryServicePage';

const meta: Meta<typeof DirectoryServicePage> = {
  title: 'Page Examples/Directory Service Page',
  component: DirectoryServicePage,
  parameters: {
    status: {
      type: 'beta',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryServicePage>;

export const ExampleDirectoryServicePage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
