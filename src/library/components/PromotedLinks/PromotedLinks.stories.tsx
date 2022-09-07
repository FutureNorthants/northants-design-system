import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import PromotedLinks from './PromotedLinks';
import { PromotedLinksProps } from './PromotedLinks.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Promoted Links',
  component: PromotedLinks,
};

const Template: Story<PromotedLinksProps> = (args) => (
  <SBPadding>
    <PromotedLinks {...args} />
  </SBPadding>
);

export const ExamplePromotedLinks = Template.bind({});
ExamplePromotedLinks.args = {
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
};

export const ExamplePromotedLinksOneCol = Template.bind({});
ExamplePromotedLinksOneCol.args = {
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
  oneCol: true,
};
