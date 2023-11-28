import React from 'react';
import { StoryFn } from '@storybook/react';
import Image from './Image';
import { ImageProps } from './Image.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import Heading from '../../components/Heading/Heading';

export default {
  title: 'Library/Slices/Image',
  component: Image,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ImageProps> = (args) => (
  <SBPadding>
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
  </SBPadding>
);

export const StandardImage = Template.bind({});
StandardImage.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
  imageSmall: 'https://via.placeholder.com/400x300',
  imageAltText: 'Parkland',
  ratio: '4by3',
  caption: 'The caption helps describe the image',
};

export const StandardImageWrapped = Template.bind({});
StandardImageWrapped.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
  imageSmall: 'https://via.placeholder.com/400x300',
  imageAltText: 'Parkland',
  ratio: '4by3',
  caption: 'The caption helps describe the image',
  wrapText: true,
};

export const WideImage = Template.bind({});
WideImage.args = {
  imageLarge: 'https://via.placeholder.com/800x450?text=16+by+9+image',
  imageSmall: 'https://via.placeholder.com/400x225',
  imageAltText: 'Parkland',
  ratio: '16by9',
  caption: 'The caption helps describe the image',
};

export const StandardImageWithoutCaption = Template.bind({});
StandardImageWithoutCaption.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
  imageSmall: 'https://via.placeholder.com/400x300',
  imageAltText: 'Parkland',
  ratio: '4by3',
};

export const BannerImage = Template.bind({});
BannerImage.args = {
  imageLarge: 'https://via.placeholder.com/800x200?text=4+by+1+image',
  imageSmall: 'https://via.placeholder.com/400x100',
  imageAltText: 'Parkland',
  ratio: '4by1',
  caption: 'The caption helps describe the image',
};
