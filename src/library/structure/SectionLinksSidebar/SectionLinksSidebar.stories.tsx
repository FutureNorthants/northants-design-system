import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SectionLinksSidebar from './SectionLinksSidebar';

const meta: Meta<typeof SectionLinksSidebar> = {
  title: 'Library/Structure/Section Links - sidebar',
  component: SectionLinksSidebar,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionLinksSidebar>;

export const ExampleSection: Story = {
  args: {
    Title: 'Pages in this section',
    Sections: [
      {
        SectionTitle: 'Your bins and rubbish',
        SectionLinks: [
          {
            title: 'Find your bin collection day',
            url: '/',
            isCurrent: true,
          },
          {
            title: 'Arrange bulky item collection',
            url: '/',
            isCurrent: false,
          },
          {
            title: 'Report a missed collection',
            url: '/',
          },
          {
            title: 'Request a new or replacement bin',
            url: '/',
          },
          {
            title: 'Find a household waste recycling centre',
            url: '/',
          },
          {
            title: 'What to recycle and where?',
            url: '/',
          },
        ],
      },
    ],
  },
  render: (args) => (
    <div style={{ maxWidth: '340px' }}>
      <SectionLinksSidebar {...args} />
    </div>
  ),
};

export const ExampleRelated: Story = {
  ...ExampleSection,
  args: {
    Title: 'Also found in',
    Sections: [
      {
        SectionLinks: [
          {
            title: 'Bin collection, recycling and waste',
            url: '/',
          },
        ],
      },
    ],
  },
};

export const ExampleMultiple: Story = {
  ...ExampleSection,
  args: {
    Title: 'Pages in this section',
    Sections: [
      {
        SectionTitle: 'Your bins and rubbish',
        SectionLinks: [
          {
            title: 'Contact the council',
            url: '/',
            isCurrent: true,
          },
          {
            title: 'Give feedback on our services',
            url: '/',
          },
          {
            title: 'Requesting information from the council',
            url: '/',
          },
          {
            title: 'Privacy',
            url: '/',
          },
          {
            title: 'Policies',
            url: '/',
          },
        ],
      },

      {
        SectionTitle: 'Your bins and rubbish',
        SectionLinks: [
          {
            title: 'Contact the council',
            url: '/',
            isCurrent: true,
          },
          {
            title: 'Give feedback on our services',
            url: '/',
            isCurrent: false,
          },
          {
            title: 'Requesting information from the council',
            url: '/',
            isCurrent: false,
          },
          {
            title: 'Privacy',
            url: '/',
            isCurrent: false,
          },
          {
            title: 'Policies',
            url: '/',
            isCurrent: false,
          },
        ],
      },
    ],
  },
};

export const ExampleReallyLongLinkText: Story = {
  ...ExampleSection,
  args: {
    Title: 'Really long link text example',
    Sections: [
      {
        SectionLinks: [
          {
            title:
              'Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
            url: '/',
          },
          {
            title: 'Contact the council',
            url: '/',
          },
          {
            title: 'Give feedback on our services',
            url: '/',
          },
          {
            title: 'Requesting information from the council',
            url: '/',
          },
          {
            title: 'Privacy',
            url: '/',
          },
          {
            title: 'Policies',
            url: '/',
          },
        ],
      },
    ],
  },
};
