import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Card from './Card';
import { CardProps } from './Card.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Components/Card',
  component: Card,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: Story<CardProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <Card {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const CardWithHeading = Template.bind({});
CardWithHeading.args = {
  header: 'Example Heading',
  content: '<p>Some example content</p>',
};

export const CardWithoutHeading = Template.bind({});
CardWithoutHeading.args = {
  content: '<p>Some example content</p>',
};

export const CardWithFooterLink = Template.bind({});
CardWithFooterLink.args = {
  header: 'Example Heading',
  content: '<p>Some example content</p>',
  footerLink: {
    url: '/test',
    title: 'Example link text',
  },
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  header: 'Example Heading',
  content: '<p>Some example content</p>',
  imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
  imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
  imageAltText: 'Parkland',
};