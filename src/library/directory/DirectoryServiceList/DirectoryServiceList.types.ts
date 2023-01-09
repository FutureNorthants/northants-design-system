import { Dispatch, SetStateAction } from 'react';
import { DirectoryServiceProps } from '../DirectoryService/DirectoryService.types';

export interface DirectoryServiceListProps {
  /**
   * The base url for the directory
   */
  directoryPath: string;

  /**
   * The url to the shortlist
   */
  shortListPath: string;

  /**
   * An array of Directory Services
   */
  services: DirectoryServiceProps[];

  /**
   * The search term string
   */
  search?: string;

  /**
   * Function prop passed in to handle updating search
   */
  setSearch: Dispatch<SetStateAction<string>>;

  /**
   * The postcode search term
   */
  postcode?: string;

  /**
   * Function prop passed in to handle updating postcode
   */
  setPostcode: Dispatch<SetStateAction<string>>;

  /**
   * The total amount of results
   */
  totalResults?: number;

  /**
   * The total amount of pages
   */
  pageNumber?: number;

  /**
   * The number of results per page
   */
  perPage?: number;

  /**
   * The max length of each service description extract
   */
  extractLength?: number;

  /**
   * The filter categories
   */
  categories?: DirectoryCategory[];

  /**
   * Function prop passed in to handle updating categories
   */
  setCategories: Dispatch<SetStateAction<DirectoryCategory[]>>;

  /**
   * The minimum age filter
   */
  minimumAge?: string;

  /**
   * Function prop passed in to handle updating minimumAge
   */
  setMinimumAge: Dispatch<SetStateAction<string>>;

  /**
   * The maximum age filter
   */
  maximumAge?: string;

  /**
   * Function prop passed in to handle updating maximumAge
   */
  setMaximumAge: Dispatch<SetStateAction<string>>;

  /**
   *  Where to centre the map, in the format 'lat,lng'
   */
  mapCenter?: string;

  /**
   * The optional zoom level, between 1 and 20. 1 = world, 20 = buildings
   */
  mapZoom?: number;

  /**
   * Is the data loading
   */
  isLoading: boolean;
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

  /**
   * Should multiple options be allowed
   */
  singleSelection: boolean;
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
  checked: boolean;
}
