
export interface DropDownFilterProps {
  selected: number,
 /**
  * What to show in the dropdown
  */
 options: Array<DropDownFilterOptionsProps>;
}


export interface DropDownFilterOptionsProps {
  id: number;
  /**
   * Text shown in dropdown
   */
  title: string;
  /**
   * Filter sent to the all seeing server
   */
  value: string;

  checked: boolean;
}
