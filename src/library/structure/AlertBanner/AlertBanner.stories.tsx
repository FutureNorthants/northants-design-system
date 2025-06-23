import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AlertBanner from './AlertBanner';
import Button from '../../components/Button/Button';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof AlertBanner> = {
  title: 'library/Structure/Alert Banner',
  component: AlertBanner,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

const childrenMessage = (
  <p>
    Coronavirus | National lockdown: stay at home.{' '}
    <a href="javascript:;">Learn what this means for residents and workers here</a>
  </p>
);

const resetAlert = (event) => {
  window.localStorage.clear();
  window.location.replace(window.location.href.split('&')[0]);
};

export const AlertBannerExampleAlert: Story = {
  args: {
    title: 'Coronavirus (COVID-19)',
    uid: '5',
    children: childrenMessage,
  },
  render: (args) => (
    <>
      <AlertBanner {...args} />

      <MaxWidthContainer>
        <br />
        <br />
        <p>Once this unique alert has been hidden it will not be shown again on this device.</p>
        <br />
        <Button url={''} onClick={resetAlert}>
          Click to reset
        </Button>
      </MaxWidthContainer>
    </>
  ),
};

export const AlertBannerExampleWarning: Story = {
  ...AlertBannerExampleAlert,
  args: {
    title: 'Warning message',
    uid: '6',
    alertType: 'warning',
    children: childrenMessage,
  },
};

export const AlertBannerExamplePositive: Story = {
  ...AlertBannerExampleAlert,
  args: {
    title: 'Positive message',
    uid: '7',
    alertType: 'positive',
    children: childrenMessage,
  },
};

export const AlertBannerExampleMemorial: Story = {
  ...AlertBannerExampleAlert,
  args: {
    title: 'Something terrible has happened',
    uid: '4',
    alertType: 'london_bridge',
    children: childrenMessage,
  },
};

export const AlertBannerWithLongText: Story = {
  ...AlertBannerExampleAlert,
  args: {
    title: 'An alert with long text',
    uid: '8',
    alertType: 'positive',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum pretium mauris a imperdiet.
        Vestibulum nulla felis, aliquet ut massa non, vulputate molestie lectus. Etiam risus lectus, porta non metus
        eget, efficitur elementum dolor. Donec odio turpis, ullamcorper sit amet convallis in, feugiat sit amet mi.{' '}
      </p>
    ),
  },
};
