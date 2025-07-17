import React from 'react';
import { StoryFn } from '@storybook/react-webpack5';
import SectionLinksSidebar from './SectionLinksSidebar';
import { SectionLinksSidebarProps } from './SectionLinksSidebar.types';
import { SBPadding } from '../../../../.storybook/SBPadding';

export default {
  title: 'Library/Structure/Section Links - sidebar',
  component: SectionLinksSidebar,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<SectionLinksSidebarProps> = (args) => (
  <SBPadding>
    <div style={{ maxWidth: '340px' }}>
      <SectionLinksSidebar {...args} />
    </div>
  </SBPadding>
);

export const ExampleSection = Template.bind({});
ExampleSection.args = {
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
};

export const ExampleRelated = Template.bind({});
ExampleRelated.args = {
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
};

export const ExampleMultiple = Template.bind({});
ExampleMultiple.args = {
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
};

export const ExampleReallyLongLinkText = Template.bind({});
ExampleReallyLongLinkText.args = {
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
};
