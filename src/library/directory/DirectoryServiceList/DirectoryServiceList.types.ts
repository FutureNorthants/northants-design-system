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

  /**
   * The filter categories
   */
  categories?: DirectoryCategory[];
}

export interface DirectoryCategory {
  /**
   * The category label
   */
  label: string;

  /**
   * The vocabulary name
   */
  vocabulary: string;

  /**
   * An array of taxonomies
   */
  options: DirectoryTaxonomy[];
}

export interface DirectoryTaxonomy {
  /**
   * Unique taxonomy identifier in curie format (e.g. localOffer1)
   */
  id: string;

  /**
   * The name of the taxonomy
   */
  name: string;

  /**
   * The vocabulary name
   */
  vocabulary: string;

  /**
   * The optional parent taxonomy
   */
  parent?: string | null;

  /**
   * Is the option checked
   */
  checked?: boolean;
}
