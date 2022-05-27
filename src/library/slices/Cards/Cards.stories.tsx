import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Cards from './Cards';
import { CardsProps } from './Cards.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

export default {
  title: 'Library/Slices/Cards',
  component: Cards,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const longContent = `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet eleifend ante, ut pretium nibh laoreet ac.
    </p>
    <p>
      Vestibulum interdum mi et dolor pharetra maximus. In tristique, neque et semper pretium, erat ante dignissim
      magna, in congue dolor diam sit amet elit. Sed sit amet tortor ut urna finibus fermentum id in libero.
    </p>`;

const Template: Story<CardsProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <Cards {...args} />
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleCards = Template.bind({});
ExampleCards.args = {
  cards: [
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
    },
  ],
};
export const ExampleCardsWithLongContent = Template.bind({});
ExampleCardsWithLongContent.args = {
  cards: [
    {
      header: 'Example heading',
      content: longContent,
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: longContent,
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
  ],
};

export const ExampleCardsWithFooterLinks = Template.bind({});
ExampleCardsWithFooterLinks.args = {
  cards: [
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
  ],
};

export const ExampleCardsWithImages = Template.bind({});
ExampleCardsWithImages.args = {
  cards: [
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
      imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
      imageAltText: 'Parkland',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
      imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
      imageAltText: 'Parkland',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: '<p>Some example content</p>',
      imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
      imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
      imageAltText: 'Parkland',
      footerLink: {
        url: '/test',
        title: 'Example link text',
      },
    },
  ],
};

export const ExampleCardsWithOnlyImages = Template.bind({});
ExampleCardsWithOnlyImages.args = {
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
