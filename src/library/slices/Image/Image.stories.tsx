import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import Heading from '../../components/Heading/Heading';

const meta: Meta<typeof Image> = {
  title: 'Library/Slices/Image',
  component: Image,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const StandardImage: Story = {
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: '4by3',
    caption: 'The caption helps describe the image',
  },
  render: (args) => (
    <MaxWidthContainer>
      <p>
        This is some <em>text</em> that is <strong>located before</strong> the image to show how wide the paragraph can
        be, stretching to fit whatever container this is in.
      </p>
      <Image {...args} />
      <Heading level={2} text="Followup text" />
      <p>
        This is some <em>text</em> that is <strong>located after</strong> the image to show how wide the paragraph can
        be, stretching to fit whatever container this is in.
      </p>
      <ul>
        <li>A list item that is long enough to wrap onto the next line to see if that works ok too</li>
        <li>A list item</li>
        <li>A list item</li>
        <li>A list item</li>
        <li>A list item</li>
        <li>A list item</li>
        <li>A list item</li>
        <li>A list item</li>
      </ul>
    </MaxWidthContainer>
  ),
};

export const StandardImageWrapped: Story = {
  ...StandardImage,
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: '4by3',
    caption: 'The caption helps describe the image',
    wrapText: true,
  },
};

export const StandardImageWrappedNoCaption: Story = {
  ...StandardImage,
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: '4by3',
    wrapText: true,
  },
};

export const WideImage: Story = {
  ...StandardImage,
  args: {
    imageLarge: 'https://via.placeholder.com/800x450?text=16+by+9+image',
    imageSmall: 'https://via.placeholder.com/400x225',
    imageAltText: 'Parkland',
    ratio: '16by9',
    caption: 'The caption helps describe the image',
  },
};

export const StandardImageWithoutCaption: Story = {
  ...StandardImage,
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: '4by3',
  },
};

export const BannerImage: Story = {
  ...StandardImage,
  args: {
    imageLarge: 'https://via.placeholder.com/800x200?text=4+by+1+image',
    imageSmall: 'https://via.placeholder.com/400x100',
    imageAltText: 'Parkland',
    ratio: '4by1',
    caption: 'The caption helps describe the image',
  },
};
