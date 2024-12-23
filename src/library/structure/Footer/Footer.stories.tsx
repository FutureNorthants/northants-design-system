import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'library/Structure/Footer',
  component: Footer,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const ExampleFooter: Story = {
  args: {
    footerLinksArray: [
      {
        title: 'Accessibility',
        url: '/',
      },
      {
        title: 'Contact us',
        url: '/',
      },
      {
        title: 'Copyright',
        url: '/',
      },
      {
        title: 'Payments',
        url: '/',
      },
      {
        title: 'Privacy',
        url: '/',
      },
      {
        title: 'Website Feedback',
        url: '/',
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleFooterWithoutLinks: Story = {
  args: {},
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleFooterWithTranslate: Story = {
  args: {
    hasTranslate: true,
    footerLinksArray: [
      {
        title: 'Accessibility',
        url: '/',
      },
      {
        title: 'Contact us',
        url: '/',
      },
      {
        title: 'Copyright',
        url: '/',
      },
      {
        title: 'Payments',
        url: '/',
      },
      {
        title: 'Privacy',
        url: '/',
      },
      {
        title: 'Website Feedback',
        url: '/',
      },
    ],
  },
  parameters: {
    pageLayout: 'page',
  },
};
