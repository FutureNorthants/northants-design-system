import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ServiceLandingPageExample } from './ServiceLandingPageExample';
import { ServiceLandingPageExampleProps } from './ServiceLandingPageExample.types';
import { HeroImageExampleMicroSiteData } from '../../structure/HeroImage/HeroImage.storydata';
import { sections, breadcrumbs, footerLinks } from './ServiceLandingPageExample.storydata';

export default {
  title: 'Page Examples/Service Landing Page Examples',
  component: ServiceLandingPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: Story<ServiceLandingPageExampleProps> = (args) => <ServiceLandingPageExample {...args} />;

export const BinCollectionExample = Template.bind({});
BinCollectionExample.args = {
  title: 'Bin collection, recycling and waste',
  breadcrumbsArray: breadcrumbs,
  sections,
  footerLinks,
};

export const OneSectionExample = Template.bind({});
OneSectionExample.args = {
  title: 'Bin collection, recycling and waste',
  breadcrumbsArray: breadcrumbs,
  sections: sections.slice(0, 1),
  footerLinks,
};

export const MicroSiteExample = Template.bind({});
MicroSiteExample.args = {
  title: 'Northamptonshire Country Parks',
  heroImage: HeroImageExampleMicroSiteData, // empty headline in this overriden by title above
  breadcrumbsArray: breadcrumbs,
  bodyText:
    'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
  sections: sections.slice(0, 1),
  footerLinks,
};

export const MicroSiteBoxedExample = Template.bind({});
MicroSiteBoxedExample.args = {
  title: 'Northamptonshire Country Parks',
  heroImage: { 
    ...HeroImageExampleMicroSiteData,
    callToActionText: '...google It!',
    callToActionURL: 'https://www.google.com',
    content: "<p>They're wicked innit, don't just believe us...</p>",
    backgroundBox: true, 
  }, // empty headline in this overriden by title above
  breadcrumbsArray: breadcrumbs,
  bodyText:
    'Explore, discover and enjoy Northamptonshire Country Parks. Woodland walks, reservoir views, play areas, cafes, each country park has its own unique character.',
  sections: sections.slice(0, 1),
  footerLinks,
};
