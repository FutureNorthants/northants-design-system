export interface EventDetailsProps {
  /**
   * Event date and time in a format JavaScript can parse
   */
  startTime: string;

  /**
   * Event location
   */
  location: string;

  /**
   * Should the event details have a border, defaults to true
   */
  hasBorder?: boolean;

  /**
   * Should the event details have top and bottom margin. Defaults to true
   */
  hasMargin?: boolean;
}
