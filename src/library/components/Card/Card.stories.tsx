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
  content: <p>Some example content</p>,
};

export const CardWithoutHeading = Template.bind({});
CardWithoutHeading.args = {
  content: <p>Some example content</p>,
};

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  header: 'Example Heading',
  content: <p>Some example content</p>,
  footer: {
    url: '/test',
    text: 'Example link text',
  },
};
