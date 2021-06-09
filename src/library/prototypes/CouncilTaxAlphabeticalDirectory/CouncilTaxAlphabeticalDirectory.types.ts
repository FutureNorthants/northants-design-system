
export interface CouncilTaxAlphabeticalDirectoryProps {
  /**
   * What is this?
   */
   data: Array<CouncilTaxAlphabeticalDirectoryLetterProps>;
}

export interface CouncilTaxAlphabeticalDirectoryLetterProps {
  /**
   * What is this?
   */
   group: string;

   /**
    * Data to show in directory
    */
   children: Array<CouncilTaxAlphabeticalDirectoryDataProps>
}

export interface CouncilTaxAlphabeticalDirectoryDataProps {
  /**
   * What is this?
   */
   title: string;

   /**
    * which financial year this data is for
    */
   financialYear: string;

   /**
    * the bands
    */
   bands: array<string>;
}
