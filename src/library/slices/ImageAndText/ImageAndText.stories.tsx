import React from 'react';
import { StoryFn } from '@storybook/react';
import ImageAndText from './ImageAndText';
import { ImageAndTextProps } from './ImageAndText.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ImageAndTextWithHeading } from './ImageAndText.storydata';

export default {
  title: 'Library/Slices/ImageAndText',
  component: ImageAndText,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<ImageAndTextProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <ImageAndText {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleImageAndText = Template.bind({});
ExampleImageAndText.args = ImageAndTextWithHeading;

export const ExampleImageAndTextWithoutHeading = Template.bind({});
ExampleImageAndTextWithoutHeading.args = {
  ...ImageAndTextWithHeading,
  heading: undefined,
};
