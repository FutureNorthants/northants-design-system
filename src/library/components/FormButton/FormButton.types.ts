export interface FormButtonProps {
  /**
   * Button label
   */
  text: string;
  /**
   * Is this the principal Button on the page?
   */
  primary?: boolean;
  /**
   * How large should the Button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button type, defaults to submit
   */
  type?: string;
  /**
   * Is the button disabled?
   */
  isDisabled?: boolean;
}
