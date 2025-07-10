import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PageWrapper from './PageWrapper';

const meta: Meta<typeof PageWrapper> = {
  title: 'Library/Structure/PageWrapper',
  component: PageWrapper,
};

export default meta;
type Story = StoryObj<typeof PageWrapper>;

export const ExamplePageWrapper: Story = {
  args: {
    colour: 'grey',
  },
};
