import React from 'react';
import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

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
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    primary: false,
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const Large: Story = {
  ...Primary,
  args: {
    size: 'large',
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const Small: Story = {
  ...Primary,
  args: {
    size: 'small',
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const ColourOverride: Story = {
  ...Primary,
  args: {
    primary: true,
    text: 'This might not be accessible if the overrided colour is too light!',
    url: 'https://futurenorthantswest.org/',
    colourOverride: 'pink',
  },
};
