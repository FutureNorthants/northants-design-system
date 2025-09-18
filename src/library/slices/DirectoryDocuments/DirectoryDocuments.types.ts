import { Dispatch, SetStateAction } from 'react';
import { DirectoryDocument } from '../../directory/DirectoryDocumentList/DirectoryDocumentList.types';

export interface DirectoryDocumentsProps {
  /**
   * An array of documents
   */
  documents: DirectoryDocument[];

  /**
   * Optional label text for the search input
   */
  searchLabel?: string;

  /**
   * The search term string
   */
  search?: string;

  /**
   * Function prop passed in to handle updating search
   */
  setSearch: Dispatch<SetStateAction<string>>;

  /**
   * The total amount of results
   */
  totalResults?: number;

  /**
   * The total amount of pages
   */
  pageNumber?: number;

  /**
   * Function prop passed in to handle the update page number
   */
  setPageNumber: Dispatch<SetStateAction<number>>;

  /**
   * The number of results per page
   */
  perPage?: number;

  /**
   * Is the data loading
   */
  isLoading: boolean;

  /**
   * Is the component in error state
   */
  isError?: boolean;
}
