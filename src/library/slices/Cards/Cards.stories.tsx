import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Cards from './Cards';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof Cards> = {
  title: 'Library/Slices/Cards',
  component: Cards,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Cards>;

const longContent = `<p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet eleifend ante, ut pretium nibh laoreet ac.
    </p>
    <p>
      Vestibulum interdum mi et dolor pharetra maximus. In tristique, neque et semper pretium, erat ante dignissim
      magna, in congue dolor diam sit amet elit. Sed sit amet tortor ut urna finibus fermentum id in libero.
    </p>`;

export const ExampleCards: Story = {
  args: {
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
  },
  render: (args) => (
    <MaxWidthContainer>
      <Cards {...args} />
    </MaxWidthContainer>
  ),
};

export const ExampleCardsWithLongContent: Story = {
  ...ExampleCards,
  args: {
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
  },
};

export const ExampleCardsWithFooterLinks: Story = {
  ...ExampleCards,
  args: {
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
  },
};

export const ExampleCardsWithImages: Story = {
  ...ExampleCards,
  args: {
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
  },
};

export const ExampleCardsWithOnlyImages: Story = {
  ...ExampleCards,
  args: {
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
  },
};
