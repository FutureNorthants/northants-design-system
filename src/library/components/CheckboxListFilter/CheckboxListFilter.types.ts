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
   * The label text
   */
  label: string | null;

  /**
   * The hint text
   */
  hint: string | null;

  /**
   * The id for the hint aria-describedby
   */
  hintId?: string;

  /**
   * Should the legend be displayed
   */
  displayLegend: boolean;

  /**
   * Optional on change method
   */
  onChange?: (checked: string) => void;
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
