import { DirectoryServiceProps } from '../DirectoryService/DirectoryService.types';

export interface DirectoryServiceListProps {
  /**
   * The base url for the directory
   */
  directoryPath: string;

  /**
   * An array of Directory Services
   */
  services: DirectoryServiceProps[];

  /**
   * The search term string
   */
  searchTerm?: string;

  /**
   * The postcode search term
   */
  searchPostcode?: string;

  /**
   * The total amount of results
   */
  totalResults?: number;

  /**
   * The total amount of pages
   */
  pageNumber?: number;

  /**
   * The max length of each service description extract
   */
  extractLength?: number;
}
