import React from 'react';
import { SectionLinksProps } from '../../structure/SectionLinks/SectionLinks.types';
import { FooterLinkProp } from '../../structure/Footer/Footer.types';
import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import { PageLinkProp, ServicesLinksListProps } from '../../structure/ServicesLinksList/ServicesLinksList.types';
import { AlertBannerServiceProps } from '../../structure/AlertBannerService/AlertBannerService.types';
import { CardsProps } from '../../slices/Cards/Cards.types';
import { CallToAction, Cards, Heading, ImageAndText } from '../../..';
import { ImageAndTextWithHeading } from '../../slices/ImageAndText/ImageAndText.storydata';

const topServicesData: Array<PageLinkProp> = [
  {
    title: 'Your bins and rubbish',
    url: 'your-bins-and-rubbish',
    iconKey: 'bins',
    quickLinksArray: [],
  },
  {
    title: 'Street cleaning',
    url: 'street-cleaning',
    iconKey: 'roads',
    quickLinksArray: [],
  },
  {
    title: 'Business, commercial and clinical waste',
    url: 'business-commercial-and-clinical-waste',
    iconKey: 'planning',
    quickLinksArray: [],
  },
  {
    title: 'Find your bin collection day',
    url: 'find-your-bin-collection-day',
    iconKey: 'roads',
    quickLinksArray: [],
  },
  {
    title: 'Arrange bulky item collection',
    url: 'arrange-bulky-item-collection',
    iconKey: 'planning',
    quickLinksArray: [],
  },
  {
    title: 'What to recycle and where?',
    url: 'what-to-recycle-and-where',
    iconKey: 'bins',
    quickLinksArray: [],
  },
];

const topServicesCommon = {
  hideHeader: true,
  hasBackground: false,
  serviceId: 'bin-collection',
};

export const threeTopServicesData: ServicesLinksListProps = {
  ...topServicesCommon,
  serviceLinksArray: topServicesData.slice(0, 3),
};

export const sixTopServicesData: ServicesLinksListProps = {
  ...topServicesCommon,
  serviceLinksArray: topServicesData.slice(0, 6),
};

export const sections: SectionLinksProps[] = [
  {
    sectionTitle: 'Your bins and rubbish',
    sectionSlug: 'your-bins-and-rubbish',
    pageLinksArray: [
      {
        title: 'Find your bin collection day',
        summary: 'Find your bin collection day using your post code and see your waste and recycling calendar.',
        url: '/',
      },
      {
        title: 'Arrange bulky item collection',
        summary: 'Arrange collection for large waste items, like sofas, fridges or washing machines.',
        url: '/',
      },
      {
        title: 'Report a missed collection',
        summary: 'Let us know if your bins have not been collected.',
        url: '/',
      },
      {
        title: 'Request a new or replacement bin',
        summary: 'Order a new bin, or let us know if your bin is damaged, lost or stolen.',
        url: '/',
      },
      {
        title: 'Find a household waste recycling centre',
        summary: 'Find your nearest recycling centre, it’s opening times and charges for non-household waste.',
        url: '/',
      },
      {
        title: 'What to recycle and where?',
        summary: 'Find out how waste and recycling colelction works in your local area and what goes in each bin.',
        url: '/',
      },
    ],
  },
  {
    sectionTitle: 'Street cleaning',
    sectionSlug: 'street-cleaning',
    pageLinksArray: [
      {
        title: 'Report fly-tipping',
        summary: 'Tell us about illegal waste dumping in your local area, or around Nothamptonshire.',
        url: '/',
      },
      {
        title: 'Report a litter or street cleaning problem',
        summary: 'Let us know about litter, graffiti or street cleaning problems.',
        url: '/',
      },
    ],
  },
  {
    sectionTitle: 'Business, commercial and clinical waste',
    sectionSlug: 'business-commercial-and-clinical-waste',
    pageLinksArray: [
      {
        title: 'Dispose of business or commercial waste',
        summary: 'Get advice about storing and disposing of business waste.',
        url: '/',
      },
      {
        title: 'Arrange clinical waste collections',
        summary: 'We provide a free of charge collection of clinical waste from domestic properties',
        url: '/',
      },
      {
        title: 'Dispose of hazardous waste',
        summary: 'How to dispose of invasive plants, asbestos, plasterboard, chemicals and other hazardous waste.',
        url: '/',
      },
      {
        title: 'Apply for a waste e-permit',
        summary:
          'If you use a car towing a trailer or a commercial-type vehicle to access our waste recycling centres you will need an e-permit.',
        url: '/',
      },
    ],
  },
];

export const footerLinks: FooterLinkProp[] = [
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
];

export const breadcrumbs: BreadcrumbProp[] = [
  {
    title: 'Home',
    url: '/iframe.html?id=page-examples-home-page--example-home&viewMode=story',
  },
];

export const micrositeBreadcrumbs: BreadcrumbProp[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Country Parks',
    url: '/country-parks',
  },
];

export const serviceAlert: AlertBannerServiceProps = {
  children: 'This is the alert text.',
  title: 'An example service alert',
  alertType: 'alert',
};

/**
 * Promo Page Storydata
 */

export const promoHeroImageData = {
  headline: 'Sustainable West Northants',
  content: '<p>We have collated a variety of small changes that can have a big impact for you to try today.</p>',
  imageLarge:
    'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1600/500/0/2022-02/Daventry%20Country%20Park.JPG',
  imageSmall:
    'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1600/500/0/2022-02/Daventry%20Country%20Park.JPG',
  imageAltText: 'Parkland',
  backgroundBox: true,
};

export const promoTopServices: Array<PageLinkProp> = [
  {
    title: 'In your business',
    url: 'in-your-business',
    iconKey: 'births',
    quickLinksArray: [],
  },
  {
    title: 'In your home',
    url: 'in-your-home',
    iconKey: 'business',
    quickLinksArray: [],
  },
  {
    title: 'In your community',
    url: 'in-your-community',
    iconKey: 'children',
    quickLinksArray: [],
  },
];

export const promoTopServicesData: ServicesLinksListProps = {
  ...topServicesCommon,
  serviceLinksArray: promoTopServices,
};

export const cardsData: CardsProps = {
  cards: [
    {
      header: 'Commitment 1',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, portaurna.</p>',
    },
    {
      header: 'Commitment 2',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, portaurna.</p>',
    },
    {
      header: 'Commitment 3',
      content:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, portaurna.</p>',
    },
  ],
};

export const imageCardsData: CardsProps = {
  cards: [
    {
      imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
      imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
      imageAltText: 'Parkland',
    },
    {
      imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
      imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
      imageAltText: 'Parkland',
    },
    {
      imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
      imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
      imageAltText: 'Parkland',
    },
  ],
};

export const promoBodyText: React.ReactNode = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, porta urna.
      Sed porttitor neque vitae elit vehicula eleifend. Vivamus sed purus finibus, tincidunt neque quis, mollis urna.
      Donec dapibus tellus quam, vitae fringilla mi tristique nec. Sed sit amet ligula vel ante congue gravida
    </p>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula vel ante congue gravida.</li>
      <li>Phasellus vel mi mattis, facilisis est et, porta urna. Sed sit amet ligula vel ante congue gravida</li>
      <li>Vivamus sed purus finibus, tincidunt neque quis, mollis urna. Sed sit amet ligula vel ante congue gravida</li>
    </ul>
    <Heading level={2} text="Our commitments" />
    <Cards {...cardsData} />
    <Heading level={2} text="Sustainable development goals" />
    <Cards {...imageCardsData} />
    <Heading level={2} text="Ideas bank" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel mi mattis, facilisis est et, porta urna.
      Sed porttitor neque vitae elit vehicula eleifend. Vivamus sed purus finibus, tincidunt neque quis, mollis urna.
      Donec dapibus tellus quam, vitae fringilla mi tristique nec. Sed sit amet ligula vel ante congue gravida
    </p>
    <ImageAndText {...ImageAndTextWithHeading} />
    <ImageAndText {...ImageAndTextWithHeading} />
    <ImageAndText {...ImageAndTextWithHeading} />
    <Heading level={2} text="Pledge" />
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Phasellus vel mi mattis, facilisis est et, porta urna.</li>
      <li>Vivamus sed purus finibus, tincidunt neque quis, mollis urna.</li>
    </ul>
    <p></p>
    <CallToAction url="/example-link" text="Share your pledge" />
  </>
);
