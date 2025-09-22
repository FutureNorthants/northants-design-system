import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import HeadingWithIconLink from './HeadingWithIconLink';

const meta: Meta<typeof HeadingWithIconLink> = {
  title: 'Library/Components/Heading with Icon Link',
  component: HeadingWithIconLink,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleIconWithHeading: Story = {
  args: {
    iconKey: 'adults',
    link: '#',
    title: 'Adults',
  },
};

export const ExampleWithoutIcon: Story = {
  args: {
    iconKey: undefined,
    link: '#',
    title: 'Adults',
  },
};

export const ExampleWithIconAndLongHeading: Story = {
  args: {
    iconKey: 'births',
    link: '#',
    title: 'Births, deaths, marriages and civil partnerships',
  },
};
