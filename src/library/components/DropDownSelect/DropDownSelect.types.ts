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
   * Should the label be bold
   */
  hasBoldLabel?: boolean;

  /**
   * Is the dropdown in error state? Defaults to false
   */
  isErrored?: boolean;

  /**
   * The error text to display
   */
  errorText?: string;

  /**
   * The optional value for a controlled component.
   * Don't set both selected and value.
   */
  value?: string | number;

  /**
   * Should the select have bottom margin
   */
  hasBottomMargin?: boolean;
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
