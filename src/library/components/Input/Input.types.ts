export interface InputProps {
  /**
   * The type, defaults to text
   */
  type?: string;

  /**
   * The placeholder text for the input
   */
  placeholder?: string;

  /**
   * The name of the input
   */
  isErrored?: boolean;

  /**
   * An optional string to explain the error
   */
  errorText?: string;

  /**
   * The name of the input
   */
  name: string;

  /**
   * The max length attribute
   */
  maxLength?: number;

  /**
   * Optional default value
   */
  defaultValue?: string | number;

  /**
   * An optional function to be called on change
   */
  onChange?: React.ReactNode;
}
