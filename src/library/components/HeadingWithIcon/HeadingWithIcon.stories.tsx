import React from 'react';
import HeadingWithIcon from './HeadingWithIcon';
import { Meta, StoryObj } from '@storybook/react-webpack5';

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
type Story = StoryObj<typeof meta>;

export const H1WithBinIcon: Story = {
  args: {
    level: 1,
    text: 'Heading With Icon 1',
    icon: 'bins',
  },
};

export const H1WithHoverEffect: Story = {
  ...H1WithBinIcon,
  args: {
    ...H1WithBinIcon.args,
    text: 'Heading With Icon & Hover Effect',
    hasHover: true,
  },
};

export const H1WithSubHeading: Story = {
  ...H1WithBinIcon,
  args: {
    ...H1WithBinIcon.args,
    subHeading: 'Example sub heading',
  },
};

export const H2WithCouncilTaxIcon: Story = {
  args: {
    level: 2,
    text: 'Heading With Icon 2',
    icon: 'counciltax',
  },
};

export const H3WithCovidIcon: Story = {
  args: {
    level: 3,
    text: 'Heading With Icon 3',
    icon: 'covid',
  },
};

export const H4WithRoadsIcon: Story = {
  args: {
    level: 4,
    text: 'Heading With Icon 4',
    icon: 'roads',
  },
};
