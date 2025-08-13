import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
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
type Story = StoryObj<typeof meta>;

export const CardWithContentOnly: Story = {
  args: {
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

export const CardWithHeadingAndContent: Story = {
  ...CardWithContentOnly,
  args: {
    ...CardWithContentOnly.args,
    header: 'Example Heading',
  },
};

export const CardWithFooterLink: Story = {
  ...CardWithHeadingAndContent,
  args: {
    ...CardWithHeadingAndContent.args,
    footerLink: {
      url: '/test',
      title: 'Example footer link text',
    },
  },
};

export const CardWithImageOnly: Story = {
  ...CardWithHeadingAndContent,
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=800+by+600+image',
    imageSmall: 'https://via.placeholder.com/400x300?text=400+by+300+image',
    imageAltText: 'Parkland',
  },
};

export const CardWithImageAndContent: Story = {
  ...CardWithContentOnly,
  ...CardWithImageOnly,
  args: {
    ...CardWithContentOnly.args,
    ...CardWithImageOnly.args,
  },
};

export const CardWithImageLink: Story = {
  ...CardWithImageAndContent,
  args: {
    ...CardWithImageAndContent.args,
    ...CardWithFooterLink.args,
  },
};
