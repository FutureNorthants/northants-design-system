import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PromotedLinks from './PromotedLinks';

const meta: Meta<typeof PromotedLinks> = {
  title: 'Library/Components/Promoted Links',
  component: PromotedLinks,
};

export default meta;
type Story = StoryObj<typeof PromotedLinks>;

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
    oneCol: true,
  },
};

export const ExamplePromotedLinksHasTabs: Story = {
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
    oneCol: false,
    hasTabs: true,
  },
};
