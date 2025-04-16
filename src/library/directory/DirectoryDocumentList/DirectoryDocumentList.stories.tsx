import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DirectoryDocumentList from './DirectoryDocumentList';
import MaxWidthContainer from '../../structure/MaxWidthContainer/MaxWidthContainer';
import PageMain from '../../structure/PageMain/PageMain';
import { ExampleDirectoryDocument, ExampleDirectoryLink } from './DirectoryDocumentList.storydata';
import { LocalOfferTaxonomy } from '../DirectoryServiceList/DirectoryServiceList.storydata';

const meta: Meta<typeof DirectoryDocumentList> = {
  title: 'Library/Directory/DirectoryDocumentList',
  component: DirectoryDocumentList,
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectoryDocumentList>;

export const ExampleDirectoryDocumentList: Story = {
  args: {
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
  },
  render: (args) => (
    <MaxWidthContainer>
      <PageMain>
        <DirectoryDocumentList {...args} />
      </PageMain>
    </MaxWidthContainer>
  ),
};

export const ExampleDirectoryDocumentListNoResults: Story = {
  ...ExampleDirectoryDocumentList,
  args: {
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
  },
};

export const ExampleDirectoryDocumentListError: Story = {
  ...ExampleDirectoryDocumentList,
  args: {
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
  },
};
