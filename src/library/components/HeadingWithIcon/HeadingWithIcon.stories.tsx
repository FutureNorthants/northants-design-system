import React from 'react';
import HeadingWithIcon from './HeadingWithIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HeadingWithIcon> = {
  title: 'Library/Components/Heading With Icon',
  component: HeadingWithIcon,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeadingWithIcon>;

export const H1: Story = {
  args: {
    level: 1,
    text: 'Heading With Icon 1',
    icon: 'bins',
  },
};

export const H1WithHover: Story = {
  ...H1,
  args: {
    level: 1,
    text: 'Heading With Icon & Hover Effect',
    icon: 'bins',
    hasHover: true,
  },
};

export const H2: Story = {
  ...H1,
  args: {
    level: 2,
    text: 'Heading With Icon 2',
    icon: 'counciltax',
  },
};

export const H3: Story = {
  ...H1,
  args: {
    level: 3,
    text: 'Heading With Icon 3',
    icon: 'covid',
  },
};

export const H4: Story = {
  ...H1,
  args: {
    level: 4,
    text: 'Heading With Icon 4',
    icon: 'roads',
  },
};

export const H1WithSubHeading: Story = {
  ...H1,
  args: {
    level: 1,
    text: 'Heading with Icon 1',
    icon: 'roads',
    subHeading: 'Example sub heading',
  },
};
