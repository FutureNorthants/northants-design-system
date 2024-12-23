import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SectionLinksMobileContents from './SectionLinksMobileContents';
import PageMain from '../PageMain/PageMain';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const meta: Meta<typeof SectionLinksMobileContents> = {
  title: 'library/Structure/Section Links Mobile Contents',
  component: SectionLinksMobileContents,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionLinksMobileContents>;

export const SectionLinksMobileContentsExample: Story = {
  args: {
    sectionLinksArray: [
      {
        title: 'Your bins and rubbish',
        id: 'your-bins-and-rubbish',
      },
      {
        title: 'Street cleaning',
        id: 'street-cleaning',
      },
      {
        title: 'Business, commercial and clinical waste',
        id: 'business-commercial-and-clinical-waste',
      },
    ],
  },
  render: (args) => (
    <PageMain>
      <MaxWidthContainer>
        <SectionLinksMobileContents {...args} /> Only viewable at mobile screen size or via the keyboard
      </MaxWidthContainer>
    </PageMain>
  ),
};
