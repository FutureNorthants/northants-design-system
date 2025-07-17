import React from 'react';
import AlertBannerService from './AlertBannerService';
import type { Meta, StoryObj } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

const meta: Meta<typeof AlertBannerService> = {
  title: 'Library/structure/Alert banner service level (secondary)',
  component: AlertBannerService,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertBannerService>;

export const ExampleAlert: Story = {
  args: {
    title: 'Title of alert',
  },
  render: (args) => (
    <PageMain>
      <MaxWidthContainer>
        <AlertBannerService {...args}>
          <p>Children of the page container goes here</p>
          <p>
            There should probably be some sort of <a href="#">Call to action</a>
          </p>
        </AlertBannerService>
      </MaxWidthContainer>
    </PageMain>
  ),
};

export const ExampleAlertWithoutTitle: Story = {
  ...ExampleAlert,
  args: {
    title: '',
  },
};

export const ExampleIEWarning: Story = {
  args: {
    title: 'Browser upgrade recommended',
  },
  render: (args) => (
    <PageMain>
      <MaxWidthContainer>
        <AlertBannerService {...args}>
          <p>
            It looks like you are using an out of date version of Internet Explorer. Using this browser will mean that
            certain features of this website will not work. It also means you are vulnerable to security exploits.{' '}
            <strong>Microsoft will no longer support Internet Explorer from August 17th 2021.</strong>
          </p>
          <p>
            We recommend that you use a modern up to date and secure browser to view this and all other websites.
            Download and install a new browser:
          </p>
          <ul>
            <li>
              <a href="https://www.microsoft.com/en-us/edge" title="Download and install Edge">
                Microsoft Edge
              </a>
            </li>
            <li>
              <a href="https://www.google.co.uk/chrome/" title="Download and install Chrome">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://www.mozilla.org/en-GB/firefox/new/" title="Download and install Firefox">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://www.apple.com/uk/safari/" title="Download and install Safari">
                Apple Safari
              </a>
            </li>
          </ul>
        </AlertBannerService>
      </MaxWidthContainer>
    </PageMain>
  ),
};

export const ExampleWarning: Story = {
  ...ExampleAlert,
  args: {
    title: 'Title of alert',
    alertType: 'warning',
  },
};

export const ExamplePositive: Story = {
  ...ExampleAlert,
  args: {
    title: 'Title of alert',
    alertType: 'positive',
  },
};

export const ExampleMemorial: Story = {
  ...ExampleAlert,
  args: {
    title: 'Title of alert',
    alertType: 'london_bridge',
  },
};
