
export interface DropDownSelectProps {
  /**
   * ID for the dropdown
   */
   id?: string,
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
  /**
  * Hide label, but visible for screen readers (totally optional)
  */
   hideLabel?: boolean;
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
