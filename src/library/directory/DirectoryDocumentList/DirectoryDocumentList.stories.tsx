import React from 'react';
import { Story } from '@storybook/react/types-6-0';
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

const Template: Story<DirectoryDocumentListProps> = (args) => (
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
