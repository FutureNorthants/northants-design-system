import { Dispatch, SetStateAction } from 'react';
import { DirectoryCategory } from '../DirectoryServiceList/DirectoryServiceList.types';
import { DownloadableFilesProps } from '../../slices/DownloadableFiles/DownloadableFiles.types';
import { FileDownloadProps } from '../../components/FileDownload/FileDownload.types';

export interface DirectoryDocumentListProps {
  /**
   * The base url for the directory
   */
  directoryPath: string;

  /**
   * An array of documents
   */
  documents: DirectoryDocument[];

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
   * The filter categories
   */
  categories?: DirectoryCategory[];

  /**
   * Function prop passed in to handle updating categories
   */
  setCategories: Dispatch<SetStateAction<DirectoryCategory[]>>;

  /**
   * Is the data loading
   */
  isLoading: boolean;
}

export interface DirectoryDocument {
  /**
   * The unique identifier
   */
  id: string;

  /**
   * The description of the file
   */
  description: string;

  /**
   * The file properties
   */
  file: FileDownloadProps;
}
