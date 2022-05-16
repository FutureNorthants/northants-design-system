import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import AlertBanner from './AlertBanner';
import { AlertBannerProps } from './AlertBanner.types';
import Button from '../../components/Button/Button';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'library/Structure/Alert Banner',
  component: AlertBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const childrenMessage = (
  <p>
    Coronavirus | National lockdown: stay at home. <a href="/">Learn what this means for residents and workers here</a>
  </p>
);

const resetAlert = (event) => {
    window.localStorage.clear();
    window.location.reload();
};

const Template: Story<AlertBannerProps> = (args) => (
  <>
    <AlertBanner {...args} />

    <MaxWidthContainer>
      <br />
      <br />
      <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
      <br />
      <Button url={null} onClick={resetAlert}>Click to reset</Button>
    </MaxWidthContainer>
  </>
);

export const AlertBannerExampleAlert = Template.bind({});
AlertBannerExampleAlert.args = {
  title: 'Coronavirus (COVID-19)',
  uid: '5',
  children: childrenMessage,
};

export const AlertBannerExampleWarning = Template.bind({});
AlertBannerExampleWarning.args = {
  title: 'Warning message',
  uid: '6',
  alertType: 'warning',
  children: childrenMessage,
};

export const AlertBannerExamplePositive = Template.bind({});
AlertBannerExamplePositive.args = {
  title: 'Positive message',
  uid: '7',
  alertType: 'positive',
  children: childrenMessage,
};

export const AlertBannerExampleMemorial = Template.bind({});
AlertBannerExampleMemorial.args = {
  title: 'Something terrible has happened',
  uid: '4',
  alertType: 'london_bridge',
  children: childrenMessage,
};

export const AlertBannerWithLongText = Template.bind({});
AlertBannerWithLongText.args = {
  title: 'An alert with long text',
  uid: '8',
  alertType: 'positive',
  children: (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pretium mauris a imperdiet.
      Vestibulum nulla felis, aliquet ut massa non, vulputate molestie lectus. Etiam risus lectus, porta non metus eget,
      efficitur elementum dolor. Donec odio turpis, ullamcorper sit amet convallis in, feugiat sit amet mi.{' '}
    </p>
  ),
};
