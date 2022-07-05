import React from 'react';
import { Story } from '@storybook/react/types-6-0';
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

const Template: Story<ImageProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <Image {...args} />
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
