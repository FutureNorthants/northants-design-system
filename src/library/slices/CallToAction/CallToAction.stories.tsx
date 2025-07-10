import React from 'react';
import CallToAction from './CallToAction';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CallToAction> = {
  title: 'Library/Slices/Call to action',
  component: CallToAction,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const Primary: Story = {
  args: {
    primary: true,
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
};

export const MultipleBtns: Story = {
  args: {
    primary: true,
    text: 'Button label',
    url: 'https://futurenorthantswest.org/',
  },
  render: (args) => (
    <>
      <CallToAction {...args} />
      <CallToAction primary text="Second button" url="#" />
    </>
  ),
};
