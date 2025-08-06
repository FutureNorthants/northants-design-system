import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromotedLinks from './PromotedLinks';

const meta: Meta<typeof PromotedLinks> = {
  title: 'Library/Components/Promoted Links',
  component: PromotedLinks,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ExamplePromotedLinks: Story = {
  args: {
    promotedLinksArray: [
      {
        title: 'Make a payment',
        url: '/',
      },
      {
        title: 'Contact the council',
        url: '/',
      },
      {
        title: 'About our new website',
        url: '/',
      },
    ],
  },
};

export const ExamplePromotedLinksOneCol: Story = {
  ...ExamplePromotedLinks,
  args: {
    ...ExamplePromotedLinks.args,
    oneCol: true,
  },
};

export const ExamplePromotedLinksHasTabs: Story = {
  ...ExamplePromotedLinks,
  args: {
    ...ExamplePromotedLinks.args,
    hasTabs: true,
  },
};

export const ExamplePromotedLinksOneColHasTabs: Story = {
  ...ExamplePromotedLinks,
  args: {
    ...ExamplePromotedLinks.args,
    oneCol: true,
    hasTabs: true,
  },
};
