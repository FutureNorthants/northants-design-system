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
   * Should the legend be displayed
   */
  displayLegend: boolean;
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
