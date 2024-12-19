import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';
import { NewsArticleData } from '../../structure/NewsArticleFeaturedBlock/NewsArticleFeaturedBlock.storydata';
import { PromoBlocksData } from '../../structure/PromoBlock/PromoBlock.storydata';
import { PromoBannerData, PromoBannerContent } from '../../structure/PromoBanner/PromoBanner.storydata';
import { ServiceLinksArray } from '../../structure/ServicesLinksList/ServicesLinksList.storydata';

const meta: Meta<typeof HomePage> = {
  title: 'Page Examples/Home Page',
  component: HomePage,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const ExampleHome: Story = {
  args: {
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
        title: 'Apply',
        url: '/',
      },
      {
        title: 'Pay',
        url: '/',
      },
      {
        title: 'Report',
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
    showSearch: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleHomeServicesBoxed: Story = {
  args: {
    ...ExampleHome.args,
    isBoxed: true,
    showSearch: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleHomeNoSearch: Story = {
  args: {
    ...ExampleHome.args,
    isBoxed: true,
    showSearch: false,
  },
  parameters: {
    pageLayout: 'page',
  },
};
