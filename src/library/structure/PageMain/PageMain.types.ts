export interface PageMainProps {
  /**
   * Any unique class names to apply to the page container
   */
  classes?: string;

  /**
   * Should the paragraph text be full width?
   */
  fullWidthText?: boolean;

  /**
   * The PageMain contents
   */
  children?: React.ReactNode;
}
