import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import WarningText from './WarningText';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof WarningText> = {
  title: 'Library/Slices/WarningText',
  component: WarningText,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof WarningText>;

export const ExampleHighlightText: Story = {
  args: {
    title: 'Highlight this text',
    isWarning: false,
  },
  render: (args) => (
    <MaxWidthContainer noBackground>
      <WarningText {...args}>
        Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit
        aliquet. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere
        velit aliquet.
      </WarningText>
    </MaxWidthContainer>
  ),
};

export const ExampleDisclaimerText: Story = {
  args: {
    title: 'Why information is on a different website',
    isWarning: true,
  },
  render: (args) => (
    <MaxWidthContainer noBackground>
      <WarningText {...args}>
        We are in the process of adding information to this new unitary council website. Some pages will give you a link
        back to a previous council website to help you find what you need. <a href="/">Read more about the changes</a>.
      </WarningText>
    </MaxWidthContainer>
  ),
};
