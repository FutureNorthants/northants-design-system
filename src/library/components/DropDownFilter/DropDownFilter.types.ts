
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
   * Which value is auto selected
   */
  selected: string,
 /**
  * What to show in the dropdown
  */
 options: Array<DropDownFilterOptionsProps>;
 serviceDropdownRef?: React.ReactNode;
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
