export interface DropDownSelectProps {
  /**
   * ID for the dropdown
   */
  id?: string;

  /**
   * What question are we asking?
   */
  label: string;

  /**
   * Which value is auto selected
   */
  selected?: string;

  /**
   * What to show in the dropdown
   */
  options: Array<DropDownSelectOptionsProps>;

  /**
   * A function for what happens if the select is changed (totally optional)
   */
  onChange?: (e: any) => void;

  /**
   * Hide label, but visible for screen readers (totally optional)
   */
  hideLabel?: boolean;

  /**
   * Is the dropdown in error state? Defaults to false
   */
  isErrored?: boolean;

  /**
   * The error text to display
   */
  errorText?: string;

  /**
   * The value used for a controlled component
   */
  value?: string;
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
