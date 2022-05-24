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
      content: <p>Some example content</p>,
    },
    {
      header: 'Example heading',
      content: <p>Some example content</p>,
    },
    {
      header: 'Example heading',
      content: <p>Some example content</p>,
    },
  ],
};

export const ExampleCardsWithFooterLinks = Template.bind({});
ExampleCardsWithFooterLinks.args = {
  cards: [
    {
      header: 'Example heading',
      content: <p>Some example content</p>,
      footer: {
        url: '/test',
        text: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: <p>Some example content</p>,
      footer: {
        url: '/test',
        text: 'Example link text',
      },
    },
    {
      header: 'Example heading',
      content: <p>Some example content</p>,
      footer: {
        url: '/test',
        text: 'Example link text',
      },
    },
  ],
};
