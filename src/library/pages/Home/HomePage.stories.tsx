import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HomePage } from './HomePage';
import { HomePageProps } from './HomePage.types';
import { NewsArticleData } from '../../structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.storydata';
import { PromoBlocksData } from '../../structure/PromoBlock/PromoBlock.storydata';
import { PromoBannerData, PromoBannerContent } from '../../structure/PromoBanner/PromoBanner.storydata';
import { ServiceLinksArray } from '../../structure/ServicesLinksList/ServicesLinksList.storydata';

export default {
  title: 'Page Examples/Home Page',
  component: HomePage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: StoryFn<HomePageProps> = (args) => <HomePage {...args} />;

export const ExampleHome = Template.bind({});
ExampleHome.args = {
  alertBannerTitle: 'Coronavirus (COVID-19)',
  alertBannerContent: (
    <p>
      Coronavirus | National lockdown: stay at home.{' '}
      <a href="/">Learn what this means for residents and workers here</a>
    </p>
  ),

  heroArray: [
    {
      image1440x810: 'https://imgur.com/nzLuqda.jpg',
      image144x81: 'https://imgur.com/LPqROgx.jpg',
    },
    {
      image1440x810: 'https://imgur.com/KhSo1Cn.jpg',
      image144x81: 'https://imgur.com/Dr4Vetq.jpg',
    },
    {
      image1440x810: 'https://imgur.com/tRB8Ts7.jpg',
      image144x81: 'https://imgur.com/k5F2jSA.jpg',
    },
    {
      image1440x810: 'https://imgur.com/CwHigdL.jpg',
      image144x81: 'https://imgur.com/WVnsE7R.jpg',
    },
  ],

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

  servicesArray: ServiceLinksArray,

  isBoxed: false,

  newsArticlesArray: NewsArticleData,

  promoBannerData: PromoBannerData,
  promoBannerContent: PromoBannerContent,
  promoBlocksArray: PromoBlocksData,

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

export const ExampleHomeServicesBoxed = Template.bind({});
ExampleHomeServicesBoxed.args = {
  ...ExampleHome.args,
  isBoxed: true,
};
