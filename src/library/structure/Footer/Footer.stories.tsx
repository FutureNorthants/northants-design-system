import React from 'react';
import { StoryFn } from '@storybook/react';
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
      title: 'About',
      url: '/',
    },
    {
      title: 'Accessibility',
      url: '/',
    },
    {
      title: 'Cookies',
      url: '/',
    },
    {
      title: 'Contact us',
      url: '/',
    },
    {
      title: 'Jobs',
      url: '/',
    },
    {
      title: 'Newsletter',
      url: '/',
    },
  ],
};

export const ExampleFooterWithoutLinks = Template.bind({});
ExampleFooterWithoutLinks.args = {};
