import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ImageAndText from './ImageAndText';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ImageAndTextWithHeading } from './ImageAndText.storydata';

const meta: Meta<typeof ImageAndText> = {
  title: 'Library/Slices/ImageAndText',
  component: ImageAndText,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageAndText>;

export const ExampleImageAndText: Story = {
  args: ImageAndTextWithHeading,
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <ImageAndText {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleImageAndTextWithoutHeading: Story = {
  ...ExampleImageAndText,
  args: {
    ...ImageAndTextWithHeading,
    heading: undefined,
  },
};
