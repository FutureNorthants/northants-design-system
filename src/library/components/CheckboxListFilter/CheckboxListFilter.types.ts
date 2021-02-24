
export interface CheckboxListFilterProps {
  /**
   * What to show in the checkboxes
   */
  options: Array<CheckboxValsProps>;

  /**
   * Which fields are checked
   */
  checked: Array<string>;

    /**
     * 
   */
  label: string;
  /**
   * 
   */
  hint: string;
}


export interface CheckboxValsProps {
  /**
   * Text shown in dropdown
   */
  title: string;
  /**
   * Filter sent to the all seeing server
   */
  value: string;
}
