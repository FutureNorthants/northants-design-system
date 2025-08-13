import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleDirectoryServicePage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
