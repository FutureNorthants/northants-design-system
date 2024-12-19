import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ServiceLandingPageExample } from './ServiceLandingPageExample';
import {
  HeroImageExampleMicroSiteData,
  HeroImageExampleBoxedWithBreadcrumbData,
} from '../../structure/HeroImage/HeroImage.storydata';
import {
  threeTopServicesData,
  sixTopServicesData,
  sections,
  breadcrumbs,
  micrositeBreadcrumbs,
  footerLinks,
  serviceAlert,
  promoHeroImageData,
  promoTopServicesData,
  promoBodyText,
} from './ServiceLandingPageExample.storydata';

const meta: Meta<typeof ServiceLandingPageExample> = {
  title: 'Page Examples/Service Landing Page Examples',
  component: ServiceLandingPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceLandingPageExample>;

export const BinCollectionExample: Story = {
  args: {
    title: 'Bin collection, recycling and waste',
    icon: 'bins',
    breadcrumbsArray: breadcrumbs,
    sections,
    footerLinksArray: footerLinks,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const OneSectionExample: Story = {
  args: {
    title: 'Bin collection, recycling and waste',
    icon: 'bins',
    breadcrumbsArray: breadcrumbs,
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const TopServicesExample: Story = {
  args: {
    title: 'Bin collection, recycling and waste',
    icon: 'bins',
    breadcrumbsArray: breadcrumbs,
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    topServices: threeTopServicesData,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const TopServicesWithAlert: Story = {
  args: {
    title: 'Bin collection, recycling and waste',
    icon: 'bins',
    breadcrumbsArray: breadcrumbs,
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    topServices: threeTopServicesData,
    serviceAlert,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const SixTopServicesExample: Story = {
  args: {
    title: 'Bin collection, recycling and waste',
    icon: 'bins',
    breadcrumbsArray: breadcrumbs,
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    topServices: sixTopServicesData,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const MicroSiteExample: Story = {
  args: {
    title: 'Northamptonshire Country Parks',
    heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
    breadcrumbsArray: undefined,
    bodyText: ' ',
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    summary:
      'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
    showSummary: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const MicroSiteWithTopServicesExample: Story = {
  args: {
    title: 'Northamptonshire Country Parks',
    heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
    breadcrumbsArray: undefined,
    bodyText: ' ',
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    topServices: threeTopServicesData,
    summary:
      'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
    showSummary: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const MicroSiteBoxedExample: Story = {
  args: {
    title: 'Northamptonshire Country Parks',
    heroImage: HeroImageExampleBoxedWithBreadcrumbData, // empty headline in this overriden by title above
    breadcrumbsArray: micrositeBreadcrumbs,
    bodyText: ' ',
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    summary:
      'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
    showSummary: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const ExampleWithServiceAlert: Story = {
  args: {
    title: 'Bin collection, recycling and waste',
    icon: 'bins',
    breadcrumbsArray: breadcrumbs,
    sections,
    footerLinksArray: footerLinks,
    serviceAlert,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const MicroSiteWithAlertExample: Story = {
  args: {
    title: 'Northamptonshire Country Parks',
    heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
    breadcrumbsArray: undefined,
    bodyText: ' ',
    sections: sections.slice(0, 1),
    footerLinksArray: footerLinks,
    summary:
      'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
    showSummary: true,
    serviceAlert,
  },
  parameters: {
    pageLayout: 'page',
  },
};

export const PromoPageExample: Story = {
  args: {
    title: 'Sustainable West Northants',
    heroImage: promoHeroImageData,
    breadcrumbsArray: undefined,
    bodyText: promoBodyText,
    sections: [],
    footerLinksArray: footerLinks,
    topServices: promoTopServicesData,
    summary:
      'Sustainability is all about living in a way that protects our natural resources and opportunities for future generations.',
    showSummary: true,
  },
  parameters: {
    pageLayout: 'page',
  },
};
