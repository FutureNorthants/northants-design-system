export interface CouncilTaxAlphabeticalDirectoryProps {
  financialYear: string;
}

/**
 * The sorted parishes, grouped by first letter
 */
export interface SortedData {
  /**
   * A grouping letter
   */
  group: string;

  /**
   * An array of sorted parishes
   */
  children: SortedParish[];
}

/**
 * The sorted parish with title and bands
 */
export interface SortedParish {
  /**
   * The banding_parish title
   */
  title: string;

  /**
   * An object of Parish Bands
   */
  values: ParishBands;
}

/**
 * The council tax bands a-h
 */
export interface ParishBands {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
}

/**
 * The raw parish returned from the API
 */
export interface ParishAPIResponse {
  /**
   * The banding parish title
   */
  banding_parish: string;

  /**
   * An object of Parish Bands
   */
  bands: ParishBands;

  /**
   * The parish code
   */
  code: string;

  /**
   * The official parish title
   */
  official_parish: string;

  /**
   * The unitary council name, such as 'West' or 'North'
   */
  unitary: string;
}
