import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import RecyclingInformationPageExample from './RecyclingInformationPageExample';

import {
  RecyclingInformationPageExample1,
  RecyclingInformationPageExample2,
  RecyclingInformationPageExample3,
} from './RecyclingInformationPageExample.storydata';

const meta: Meta<typeof RecyclingInformationPageExample> = {
  title: 'Page Examples/Recycling Information Page example',
  component: RecyclingInformationPageExample,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof RecyclingInformationPageExample>;

export const RecyclingInformationPageExampleDefaultPage: Story = {
  render: (args) => <RecyclingInformationPageExample {...args} />,
};

export const RecyclingInformationPageExampleShortPage: Story = {
  ...RecyclingInformationPageExampleDefaultPage,
  args: { children: <RecyclingInformationPageExample1 /> },
};

export const RecyclingInformationPageExampleMediumPage: Story = {
  ...RecyclingInformationPageExampleDefaultPage,
  args: { children: <RecyclingInformationPageExample2 /> },
};

export const RecyclingInformationPageExampleLargePage: Story = {
  ...RecyclingInformationPageExampleDefaultPage,
  args: { children: <RecyclingInformationPageExample3 /> },
};
