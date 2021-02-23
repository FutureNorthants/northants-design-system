
export interface SortByProps {  
  /**
  * What we're currently sorting by
  */
  sortBy?: string
  /**
   * What to show in the dropdown
   */
  options: Array<SortByValsProps>;
}

export interface SortByValsProps {
  /**
   * Text shown in dropdown
   */
  title: string;
  /**
   * Filter sent to the all seeing server
   */
  value: string;
}
