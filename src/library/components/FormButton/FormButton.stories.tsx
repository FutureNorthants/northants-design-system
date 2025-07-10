import React from 'react';
import FormButton from './FormButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FormButton> = {
  title: 'Library/Components/FormButton',
  component: FormButton,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormButton>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'FormButton label',
  },
};

export const Secondary: Story = {
  ...Primary,
  args: {
    primary: false,
    text: 'FormButton label',
  },
};

export const Large: Story = {
  ...Primary,
  args: {
    size: 'large',
    text: 'FormButton label',
  },
};

export const Small: Story = {
  ...Primary,
  args: {
    size: 'small',
    text: 'FormButton label',
  },
};
