import React from 'react';
import CallToAction from './CallToAction';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
type Story = StoryObj<typeof meta>;

export const DefaultPrimaryExample: Story = {
  args: {
    text: 'Button label',
    url: 'https://www.westnorthants.gov.uk',
  },
};

export const Secondary: Story = {
  args: {
    ...DefaultPrimaryExample.args,
    primary: false,
  },
};

export const Large: Story = {
  args: {
    ...DefaultPrimaryExample.args,
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    ...DefaultPrimaryExample.args,
    size: 'small',
  },
};

export const MultipleBtns: Story = {
  args: {},
  render: (args) => (
    <>
      <CallToAction {...args} />
      <CallToAction text="Primary Button" url="#" />
      <CallToAction text="Secondary Button" url="#" primary={false} />
    </>
  ),
};
