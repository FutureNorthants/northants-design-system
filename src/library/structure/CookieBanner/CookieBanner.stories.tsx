import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CookieBanner from './CookieBanner';
import CookieClear from './CookieClear';

const meta: Meta<typeof CookieBanner> = {
  title: 'Library/structure/Cookie Banner',
  component: CookieBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof CookieBanner>;

export const ExampleCookieBanner: Story = {
  args: {
    title: 'We use cookies on this site to enhance your user experience',
    paragraph: (
      <p>
        By clicking the Accept button, you agree to us doing so. <a href="#">More info on our cookie policy</a>
      </p>
    ),
    acceptButtonText: 'Accept all cookies',
    rejectButtonText: 'Reject all cookies',
    acceptCallback: () => {
      console.log('loading trackers');
      var tag = document.createElement('script');
      tag.src = 'https://www.googletagmanager.com/gtag/js?id=<%= ENV["GTM_TRACKING_ID"] %>';
      document.getElementsByTagName('head')[0].appendChild(tag);

      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', '<%= ENV["GA_TRACKING_ID"] %>');
    },
  },
  render: (args) => (
    <>
      <CookieBanner {...args} />
      <CookieClear />
    </>
  ),
};
