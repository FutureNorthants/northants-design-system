import React from 'react';
import { StoryObj, Meta } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const ExampleContactPage: Story = {
  parameters: {
    pageLayout: 'page',
  },
};
