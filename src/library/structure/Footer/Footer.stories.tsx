import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Footer from './Footer';
import { FooterProps } from './Footer.types';

export default {
  title: 'library/Structure/Footer',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />;

export const ExampleFooter = Template.bind({});
ExampleFooter.args = {
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
};

export const ExampleFooterWithoutLinks = Template.bind({});
ExampleFooterWithoutLinks.args = {};

export const ExampleFooterWithTranslate = Template.bind({});
ExampleFooterWithTranslate.args = {
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
};
