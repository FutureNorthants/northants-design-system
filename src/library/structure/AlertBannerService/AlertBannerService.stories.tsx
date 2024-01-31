import React from 'react';
import AlertBannerService from './AlertBannerService';
import { AlertBannerServiceProps } from './AlertBannerService.types';
import { StoryFn } from '@storybook/react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PageMain from '../PageMain/PageMain';

export default {
  title: 'Library/structure/Alert banner service level (secondary)',
  component: AlertBannerService,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<AlertBannerServiceProps> = (args) => (
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
);
const TemplateIE: StoryFn<AlertBannerServiceProps> = (args) => (
  <PageMain>
    <MaxWidthContainer>
      <AlertBannerService {...args}>
        <p>
          It looks like you are using an out of date version of Internet Explorer. Using this browser will mean that
          certain features of this website will not work. It also means you are vulnerable to security exploits.{' '}
          <strong>Microsoft will no longer support Internet Explorer from August 17th 2021.</strong>
        </p>
        <p>
          We recommend that you use a modern up to date and secure browser to view this and all other websites. Download
          and install a new browser:
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
);

export const ExampleAlert = Template.bind({});
ExampleAlert.args = {
  title: 'Title of alert',
};

export const ExampleAlertWithoutTitle = Template.bind({});
ExampleAlertWithoutTitle.args = {
  title: '',
};

export const ExampleIEWarning = TemplateIE.bind({});
ExampleIEWarning.args = {
  title: 'Browser upgrade recommended',
};

export const ExampleWarning = Template.bind({});
ExampleWarning.args = {
  title: 'Title of alert',
  alertType: 'warning',
};

export const ExamplePositive = Template.bind({});
ExamplePositive.args = {
  title: 'Title of alert',
  alertType: 'positive',
};

export const ExampleMemorial = Template.bind({});
ExampleMemorial.args = {
  title: 'Title of alert',
  alertType: 'london_bridge',
};
