import React from 'react';
import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta: Meta<typeof Button> = {
  title: 'Library/Components/Button',
  component: Button,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'Button label',
    url: 'https://www.westnorthants.gov.uk/',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
};

export const Medium: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
};

export const ColourOverride: Story = {
  args: {
    ...Primary.args,
    text: 'This might not be accessible if the overrided colour is too light!',
    colourOverride: 'pink',
  },
};
