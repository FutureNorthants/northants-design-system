import React from 'react';
import { StoryFn } from '@storybook/react';
import SectionLinks from './SectionLinks';
import { SectionLinksProps } from './SectionLinks.types';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { pageLinksArray } from './SectionLinks.storydata';

export default {
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

const Template: StoryFn<SectionLinksProps> = (args) => (
  <MaxWidthContainer>
    <SectionLinks {...args} />
  </MaxWidthContainer>
);

export const ExampleSectionLinks = Template.bind({});
ExampleSectionLinks.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 4),
};

export const ExampleSectionLinksWithoutTitle = Template.bind({});
ExampleSectionLinksWithoutTitle.args = {
  sectionTitle: 'Section title',
  displayTitle: false,
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 4),
};

export const SectionLinksWithImages = Template.bind({});
SectionLinksWithImages.args = {
  sectionTitle: 'Section With Images',
  displayTitle: true,
  hasImages: true,
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 4),
};

export const SectionLinksWithSomeImages = Template.bind({});
SectionLinksWithSomeImages.args = {
  sectionTitle: 'Section With Some Images',
  displayTitle: true,
  hasImages: true,
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 6),
};

export const SectionLinks1Link = Template.bind({});
SectionLinks1Link.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 1),
};

export const SectionLinks2Links = Template.bind({});
SectionLinks2Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 2),
};
export const SectionLinks3Links = Template.bind({});
SectionLinks3Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 3),
};
export const SectionLinks4Links = Template.bind({});
SectionLinks4Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 4),
};
export const SectionLinks5Links = Template.bind({});
SectionLinks5Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 5),
};
export const SectionLinks6Links = Template.bind({});
SectionLinks6Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 6),
};

export const SectionLinks7Links = Template.bind({});
SectionLinks7Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 7),
};

export const SectionLinks8Links = Template.bind({});
SectionLinks8Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 8),
};

export const SectionLinks9Links = Template.bind({});
SectionLinks9Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray.slice(0, 9),
};

export const SectionLinks11Links = Template.bind({});
SectionLinks11Links.args = {
  sectionTitle: 'Section title',
  sectionSlug: 'section-title',
  pageLinksArray: pageLinksArray,
};
