import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ServiceLandingPromotionPageExample } from './ServiceLandingPromotionPageExample';
import { PromotionPageExampleProps } from './PromotionPageExample.types';
import { footerLinks, HeroImageData, threeTopServicesData } from './ServiceLandingPromotionPageExample.storydata';

export default {
  title: 'Page Examples/Service Landing Promotion Page',
  component: ServiceLandingPromotionPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: Story<PromotionPageExampleProps> = (args) => <ServiceLandingPromotionPageExample {...args} />;

export const ExamplePromotionPage = Template.bind({});
ExamplePromotionPage.args = {
  title: 'Sustainable West Northants',
  heroImage: HeroImageData, // empty headline in this overriden by title above
  breadcrumbsArray: null,
  bodyText: ' ',
  footerLinks,
  topServices: threeTopServicesData,
  summary:
    'Sustainability is all about living in a way that protects our natural resources and opportunities for future generations.',
  showSummary: true,
};
