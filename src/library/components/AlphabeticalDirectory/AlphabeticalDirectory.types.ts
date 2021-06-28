
export interface AlphabeticalDirectoryProps {
  /**
   * What is this?
   */
   data: Array<AlphabeticalDirectoryLetterProps>;
}

export interface AlphabeticalDirectoryLetterProps {
  /**
   * What is this?
   */
   group: string;

   /**
    * Data to show in directory
    */
   children: Array<AlphabeticalDirectoryDataProps>
}

export interface AlphabeticalDirectoryDataProps {
  /**
   * What is this?
   */
   title: string;

   /**
    * Data to show in directory
    */
   url: string;
}
