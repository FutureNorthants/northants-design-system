
export interface DropDownFilterProps {
  /**
   * What question are we asking?
   */
  label: string,
  /**
   * Which value is auto selected
   */
  selected: string,
 /**
  * What to show in the dropdown
  */
 options: Array<DropDownFilterOptionsProps>;
}


export interface DropDownFilterOptionsProps {
   /**
   * Text shown in dropdown
   */
  title: string;
  /**
   * Filter sent to the all seeing server
   */
  value: string;
}
