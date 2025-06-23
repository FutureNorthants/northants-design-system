import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import Row from '../Row/Row';
import Column from '../Column/Column';

const meta: Meta<typeof Card> = {
  title: 'Library/Components/Card',
  component: Card,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardWithHeading: Story = {
  args: {
    header: 'Example Heading',
    content: '<p>Some example content</p>',
  },
  render: (args) => (
    <MaxWidthContainer>
      <Row>
        <Column>
          <Card {...args} />
        </Column>
      </Row>
    </MaxWidthContainer>
  ),
};

export const CardWithoutHeading: Story = {
  ...CardWithHeading,
  args: {
    content: '<p>Some example content</p>',
  },
};

export const CardWithFooterLink: Story = {
  ...CardWithHeading,
  args: {
    header: 'Example Heading',
    content: '<p>Some example content</p>',
    footerLink: {
      url: '/test',
      title: 'Example link text',
    },
  },
};

export const CardWithImage: Story = {
  ...CardWithHeading,
  args: {
    header: 'Example Heading',
    content: '<p>Some example content</p>',
    imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
    imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
    imageAltText: 'Parkland',
  },
};

export const CardWithImageLink: Story = {
  ...CardWithHeading,
  args: {
    header: 'Example Heading',
    content: '<p>Some example content</p>',
    imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
    imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
    imageAltText: 'Parkland',
    footerLink: {
      url: '/test',
      title: 'Example link text',
    },
  },
};

export const CardWithOnlyImage: Story = {
  ...CardWithHeading,
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
    imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
    imageAltText: 'Parkland',
  },
};
