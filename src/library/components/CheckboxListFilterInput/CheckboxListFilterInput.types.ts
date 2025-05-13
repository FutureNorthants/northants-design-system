export interface CheckboxListFilterInputProps {
  /**
   * The optional input id
   */
  id?: string;

  /**
   * The name of the input
   */
  name: string;

  /**
   * The optional value for a controlled component.
   * Don't set both defaultValue and value.
   */
  value?: boolean;

  /**
   * An optional function to be called on change
   */
  setCheckboxState: (e: any) => void;

  /**
   * Optional default value.
   * Don't set both defaultValue and value.
   */
  defaultValue?: boolean;

  /**
   * The label text
   */
  title?: string;

  /**
   * The label text
   */
  label: string;

  /**
   * The hint text
   */
  hint?: string;

  /**
   * The id for the hint aria-describedby
   */
  hintId?: string;
}
