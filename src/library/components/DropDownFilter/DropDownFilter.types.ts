
export interface DropDownFilterProps {
  /**
   * ID of the select
   */
   id?: string,
  /**
   * What question are we asking?
   */
  label: string,
   /**
  * What to show in the dropdown
  */
  options: Array<DropDownFilterOptionsProps>;
  /**
   * Which value is auto selected
   */
  selected: string,
   /**
  * Hide label, but visible for screen readers (totally optional)
  */
  hideLabel?: boolean;
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
