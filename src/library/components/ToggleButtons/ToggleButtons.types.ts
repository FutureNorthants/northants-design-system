export interface ToggleButtonsProps {
  /**
   * An array of toggle buttons
   */
  buttons: ToggleButtonProps[];

  /**
   * Set the default active button
   */
  defaultButton?: number;

  /**
   * Should the buttons have top margin
   */
  hasTopMargin?: boolean;
}

export interface ToggleButtonProps {
  /**
   * The optional aria-label text used to describe the button to screen readers
   */
  ariaLabel?: string;

  /**
   * The button label text
   */
  label: string;

  /**
   * The optional title for the button
   */
  title?: string;

  /**
   * The onClick function when the button is pressed
   */
  onClick?: () => void;
}
