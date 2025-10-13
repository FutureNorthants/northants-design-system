import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import PageWrapper from './PageWrapper';

const meta: Meta<typeof PageWrapper> = {
  title: 'Library/Structure/PageWrapper',
  component: PageWrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExamplePageWrapper: Story = {
  args: {
    colour: 'grey',
  },
};
