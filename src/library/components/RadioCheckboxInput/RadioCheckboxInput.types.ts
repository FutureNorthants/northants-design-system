export interface RadioCheckboxInputProps {
  /**
   * Is the input checked?
   */
  checked: boolean;

  /**
   * The label for the input
   */
  label: string;

  /**
   * The name of the input
   */
  name: string;

  /**
   * The on change function
   */
  onChange?: React.ReactNode | ((e: any) => void);

  /**
   * Is this a single selection, if true radio, if false checkbox
   */
  singleSelection: boolean;

  /**
   * The value of the input
   */
  value: string;
}
