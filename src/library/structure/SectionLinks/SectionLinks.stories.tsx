import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SectionLinks from './SectionLinks';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { pageLinksArray } from './SectionLinks.storydata';

const meta: Meta<typeof SectionLinks> = {
  title: 'library/Structure/Section Links',
  component: SectionLinks,
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    sectionTitle: {
      table: { category: 'Content' },
    },
    displayTitle: {
      table: { category: 'Presentation' },
    },
    sectionSlug: {
      table: { category: 'Presentation' },
    },
    pageLinksArray: {
      table: { category: 'Content' },
    },
    hasImages: {
      table: { category: 'Presentation' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionLinks>;

export const ExampleSectionLinks: Story = {
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 4),
  },
  render: (args) => (
    <MaxWidthContainer>
      <SectionLinks {...args} />
    </MaxWidthContainer>
  ),
};

export const ExampleSectionLinksWithoutTitle: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    displayTitle: false,
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 4),
  },
};

export const SectionLinksWithImages: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section With Images',
    displayTitle: true,
    hasImages: true,
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 4),
  },
};

export const SectionLinksWithSomeImages: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section With Some Images',
    displayTitle: true,
    hasImages: true,
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 6),
  },
};

export const SectionLinks1Link: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 1),
  },
};

export const SectionLinks2Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 2),
  },
};
export const SectionLinks3Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 3),
  },
};
export const SectionLinks4Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 4),
  },
};
export const SectionLinks5Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 5),
  },
};
export const SectionLinks6Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 6),
  },
};

export const SectionLinks7Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 7),
  },
};

export const SectionLinks8Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 8),
  },
};

export const SectionLinks9Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray.slice(0, 9),
  },
};

export const SectionLinks11Links: Story = {
  ...ExampleSectionLinks,
  args: {
    sectionTitle: 'Section title',
    sectionSlug: 'section-title',
    pageLinksArray: pageLinksArray,
  },
};
