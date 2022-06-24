import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PromotionPageExample } from './PromotionPageExample';
import { PromotionPageExampleProps } from './PromotionPageExample.types';
import { footerLinks, HeroImageData, threeTopServicesData } from './PromotionPageExample.storydata';

export default {
  title: 'Page Examples/Promotion Page',
  component: PromotionPageExample,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
} as Meta;

const Template: Story<PromotionPageExampleProps> = (args) => <PromotionPageExample {...args} />;

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
