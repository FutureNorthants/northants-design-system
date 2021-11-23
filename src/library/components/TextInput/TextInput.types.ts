export interface TextInputProps {
  /**
   * The ID of the control
   */
  id?: string;

  /**
   * The name of the input
   */
  name?: string;

  /**
   * The value of the input
   */
  value?: string;

  /**
   * The character size of the input
   */
  size?: Number;

  /**
   * The placeholder text for the input
   */
  placeholder?: string;

  /**
   * For slightly larger display in some circumstances
   */
  isLarge?: boolean;

  /**
   * Error state of the input
   */
  isErrored?: boolean;

  /**
   * An optional string to explain the error
   */
  errorText?: string;
}
