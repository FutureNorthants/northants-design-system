export interface HeadingWithIconProps {
  /**
   * What level of heading is this?
   */
  level?: number;

  /**
   * The text of the title
   */
  text: string;

  /**
   * The icon
   */
  icon: string;

  /**
   * Should there be a hover effect on the icon
   */
  hasHover?: boolean;

  /**
   * The optional subheading
   */
  subHeading?: string;
}
