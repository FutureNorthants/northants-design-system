import React from 'react';
import { StoryFn } from '@storybook/react';
import DirectoryDocumentList from './DirectoryDocumentList';
import { DirectoryDocumentListProps } from './DirectoryDocumentList.types';
import { SBPadding } from '../../../../.storybook/SBPadding';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ExampleDirectoryDocument, ExampleDirectoryLink } from './DirectoryDocumentList.storydata';
import { LocalOfferTaxonomy } from '../DirectoryServiceList/DirectoryServiceList.storydata';

export default {
  title: 'Library/Directory/DirectoryDocumentList',
  component: DirectoryDocumentList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

const Template: StoryFn<DirectoryDocumentListProps> = (args) => (
  <SBPadding>
    <MaxWidthContainer>
      <PageMain>
        <DirectoryDocumentList {...args} />
      </PageMain>
    </MaxWidthContainer>
  </SBPadding>
);

export const ExampleDirectoryDocumentList = Template.bind({});
ExampleDirectoryDocumentList.args = {
  directoryPath: '/directory/local-offer',
  documents: [ExampleDirectoryDocument, ExampleDirectoryLink],
  search: 'Example',
  setSearch: () => {},
  totalResults: 125,
  pageNumber: 1,
  setPageNumber: () => {},
  perPage: 10,
  categories: [LocalOfferTaxonomy],
  setCategories: () => {},
  isLoading: false,
};

export const ExampleDirectoryDocumentListNoResults = Template.bind({});
ExampleDirectoryDocumentListNoResults.args = {
  isError: false,
  directoryPath: '/directory/local-offer',
  documents: [],
  search: 'Example',
  setSearch: () => {},
  totalResults: 0,
  pageNumber: 1,
  setPageNumber: () => {},
  perPage: 10,
  categories: [LocalOfferTaxonomy],
  setCategories: () => {},
  isLoading: false,
};

export const ExampleDirectoryDocumentListError = Template.bind({});
ExampleDirectoryDocumentListError.args = {
  isError: true,
  directoryPath: '/directory/local-offer',
  documents: [],
  search: 'Example',
  setSearch: () => {},
  totalResults: 0,
  pageNumber: 1,
  setPageNumber: () => {},
  perPage: 10,
  categories: [],
  setCategories: () => {},
  isLoading: false,
};
