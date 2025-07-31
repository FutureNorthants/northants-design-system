import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import Card from './Card';
import { CardProps } from './Card.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import Row from '../Row/Row';
import Column from '../Column/Column';

export default {
  title: 'Library/Components/Card',
  component: Card,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<CardProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <Row>
        <Column>
          <Card {...args} />
        </Column>
      </Row>
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

export const CardWithImageLink = Template.bind({});
CardWithImageLink.args = {
  header: 'Example Heading',
  content: '<p>Some example content</p>',
  imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
  imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
  imageAltText: 'Parkland',
  footerLink: {
    url: '/test',
    title: 'Example link text',
  },
};

export const CardWithOnlyImage = Template.bind({});
CardWithOnlyImage.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
  imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
  imageAltText: 'Parkland',
};
