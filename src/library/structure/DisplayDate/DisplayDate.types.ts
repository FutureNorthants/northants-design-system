export interface DisplayDateProps {
  /**
   * The text in the hint
   */
  text: string;
  /**
   * The format for the date - default it timestamp
   */
  format: string;
  /**
   * Text before the date (no spaces included on render in case you need a colon: before the date)
   */
  preText?: string;
  /**
   * Text after the date
   */
  postText?: string;
}
