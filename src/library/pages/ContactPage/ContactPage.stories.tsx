import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContactPage } from './ContactPage';

const meta: Meta<typeof ContactPage> = {
  title: 'Page Examples/Contact Page',
  component: ContactPage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactPage>;

export const ExampleContactPage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
