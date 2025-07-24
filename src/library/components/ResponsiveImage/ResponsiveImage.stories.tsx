import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import ResponsiveImage from './ResponsiveImage';
import { ResponsiveImageProps } from './ResponsiveImage.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Components/Responsive Image',
  component: ResponsiveImage,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ResponsiveImageProps> = (args) => (
  <SBPadding>
    <ResponsiveImage {...args} />
  </SBPadding>
);

export const ExampleResponsiveImageCover = Template.bind({});
ExampleResponsiveImageCover.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
  imageSmall: 'https://via.placeholder.com/400x300',
  imageAltText: 'Parkland',
  ratio: '16by9',
  objectFit: 'cover',
};

export const ExampleResponsiveImageContain = Template.bind({});
ExampleResponsiveImageContain.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
  imageSmall: 'https://via.placeholder.com/400x300',
  imageAltText: 'Parkland',
  ratio: '4by3',
  objectFit: 'contain',
};

const TemplateAuto: StoryFn<ResponsiveImageProps> = (args) => (
  <SBPadding>
    <p>
      Auto makes the image position absolute to always fit the container, so the container needs `position: relative;`
    </p>
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <ResponsiveImage {...args} />
    </div>
  </SBPadding>
);

export const ExampleResponsiveImageAutoRatio = TemplateAuto.bind({});
ExampleResponsiveImageAutoRatio.args = {
  imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
  imageSmall: 'https://via.placeholder.com/400x300',
  imageAltText: 'Parkland',
  ratio: 'auto',
  objectFit: 'cover',
};
