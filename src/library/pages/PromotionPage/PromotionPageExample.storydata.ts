import { SectionLinksProps } from '../../structure/SectionLinks/SectionLinks.types';
import { FooterLinkProp } from '../../structure/Footer/Footer.types';
import { BreadcrumbProp } from '../../structure/Breadcrumbs/Breadcrumbs.types';
import { PageLinkProp, ServicesLinksListProps } from '../../structure/ServicesLinksList/ServicesLinksList.types';
import { AlertBannerServiceProps } from '../../structure/AlertBannerService/AlertBannerService.types';
import { CardsProps } from '../../slices/Cards/Cards.types';

export const HeroImageData = {
  headline: 'Sustainable West Northants',
  content: '<p>We have collated a variety of small changes that can have a big impact for you to try today.</p>',
  imageLarge:
    'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/1440/810/0/2021-12/Abington_Park_1.jpg',
  imageSmall:
    'https://cms.westnorthants.gov.uk/sites/default/files/styles/responsive/public/144/81/0/2021-12/Abington_Park_1.jpg',
  imageAltText: 'Parkland',
  backgroundBox: true,
};

const topServicesData: Array<PageLinkProp> = [
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

const topServicesCommon = {
  hideHeader: true,
  hasBackground: false,
  serviceId: 'bin-collection',
};

export const threeTopServicesData: ServicesLinksListProps = {
  ...topServicesCommon,
  serviceLinksArray: topServicesData.slice(0, 3),
};

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
