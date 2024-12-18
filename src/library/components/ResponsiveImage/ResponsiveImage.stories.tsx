import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ResponsiveImage from './ResponsiveImage';

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Library/Components/Responsive Image',
  component: ResponsiveImage,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveImage>;

export const ExampleResponsiveImageCover: Story = {
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: '16by9',
    objectFit: 'cover',
  },
};

export const ExampleResponsiveImageContain: Story = {
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: '4by3',
    objectFit: 'contain',
  },
};

export const ExampleResponsiveImageAutoRatio: Story = {
  args: {
    imageLarge: 'https://via.placeholder.com/800x600?text=4+by+3+image',
    imageSmall: 'https://via.placeholder.com/400x300',
    imageAltText: 'Parkland',
    ratio: 'auto',
    objectFit: 'cover',
  },
  render: (args) => (
    <>
      <p>
        Auto makes the image position absolute to always fit the container, so the container needs `position: relative;`
      </p>
      <div style={{ width: '100%', height: '300px', position: 'relative' }}>
        <ResponsiveImage {...args} />
      </div>
    </>
  ),
};
