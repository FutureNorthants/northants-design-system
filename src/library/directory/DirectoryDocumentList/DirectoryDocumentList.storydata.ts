import { LocalOfferTaxonomy } from '../DirectoryServiceList/DirectoryServiceList.storydata';
import { DirectoryDocument, DirectoryDocumentListProps } from './DirectoryDocumentList.types';

export const ExampleDirectoryDocument: DirectoryDocument = {
  id: '1234',
  description: 'This is an example document',
  file: {
    title: 'An example pdf file',
    type: 'application/pdf',
    url: '#',
    size: '1.25MB',
    archived: false,
  },
};

export const ExampleDirectoryLink: DirectoryDocument = {
  id: '1235',
  description: 'This is an example link',
  file: {
    title: 'An example link to a pdf file',
    type: 'Link',
    url: '#',
    size: '1.25MB',
    archived: false,
  },
};

export const ExampleDirectoryDocumentListProps: DirectoryDocumentListProps = {
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
