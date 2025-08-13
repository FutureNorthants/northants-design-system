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
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'FormButton label',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    text: 'FormButton label',
  },
};

export const Large: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    size: 'large',
  },
};

export const Small: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    size: 'small',
  },
};
