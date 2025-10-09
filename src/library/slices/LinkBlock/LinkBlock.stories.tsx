import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LinkBlock from './LinkBlock';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';

const meta: Meta<typeof LinkBlock> = {
  title: 'Library/Slices/LinkBlock',
  component: LinkBlock,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkBlock>;

export const ExampleLinkBlock: Story = {
  args: {
    title: 'Useful videos',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=2g2grZDjr7E',
        title: "Celebrating West Northamptonshire's Litter Heroes",
        summary:
          'Litter heroes from across West Northamptonshire share the positive work they are doing to make our communities cleaner and greener.',
      },
      {
        url: 'https://www.youtube.com/watch?v=MvKGDwVQ_cA',
        title: 'The Creative Place at Northampton Market Square',
        summary: 'Find out more about what could be the smallest creative arts centre in the world',
      },
      {
        url: 'https://www.youtube.com/@WestNorthamptonshireCouncil',
        title: 'West Northamptonshire Council YouTube Channel',
        summary: 'Some more useful information in a video',
      },
    ],
    imageAltText: 'The alt text for the image',
    imageSmall: 'https://picsum.photos/id/1/400/300',
    imageLarge: 'https://picsum.photos/id/1/800/600',
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <LinkBlock {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleLinkBlockNoImage: Story = {
  ...ExampleLinkBlock,
  args: {
    ...ExampleLinkBlock.args,
    imageAltText: null,
    imageSmall: null,
    imageLarge: null,
  },
};

export const ExampleLinkBlockNoSummary: Story = {
  ...ExampleLinkBlock,
  args: {
    title: 'Useful videos',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=2g2grZDjr7E',
        title: "Celebrating West Northamptonshire's Litter Heroes",
      },
      {
        url: 'https://www.youtube.com/watch?v=MvKGDwVQ_cA',
        title: 'The Creative Place at Northampton Market Square',
      },
      {
        url: 'https://www.youtube.com/@WestNorthamptonshireCouncil',
        title: 'West Northamptonshire Council YouTube Channel',
      },
    ],
    imageAltText: 'The alt text for the image',
    imageSmall: 'https://picsum.photos/id/1/400/300',
    imageLarge: 'https://picsum.photos/id/1/800/600',
  },
};

export const ExampleLinkBlockNoSummaryNoImage: Story = {
  ...ExampleLinkBlock,
  args: {
    title: 'Useful videos',
    links: [
      {
        url: 'https://www.youtube.com/watch?v=2g2grZDjr7E',
        title: "Celebrating West Northamptonshire's Litter Heroes",
      },
      {
        url: 'https://www.youtube.com/watch?v=MvKGDwVQ_cA',
        title: 'The Creative Place at Northampton Market Square',
      },
      {
        url: 'https://www.youtube.com/@WestNorthamptonshireCouncil',
        title: 'West Northamptonshire Council YouTube Channel',
      },
    ],
  },
};
