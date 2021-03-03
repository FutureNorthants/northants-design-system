
export interface DropDownSelectProps {
  /**
   * What question are we asking?
   */
  label: string,
  /**
   * Which value is auto selected
   */
  selected?: string,
 /**
  * What to show in the dropdown
  */
 options: Array<DropDownSelectOptionsProps>;
  /**
  * A function tfor what happnens if the select is changed (totally optional)
  */
 onChange?: React.ReactNode;
}


export interface DropDownSelectOptionsProps {
  /**
   * Text shown in dropdown
   */
  title: string;
  /**
   * Filter sent to the all seeing server
   */
  value: string;
}
