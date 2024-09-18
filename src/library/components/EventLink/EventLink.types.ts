export interface EventLinkProps {
  /**
   * The title of the event
   */
  title: string;

  /**
   * A summary of the event
   */
  summary?: string;

  /**
   * Should the summary be shown, defaults to false
   */
  showSummary?: boolean;

  /**
   * The date and time the event starts
   */
  startTime: string;

  /**
   * The date and time the event finishes
   */
  endTime?: string;

  /**
   * The optional location of the event
   */
  location?: string;

  /**
   * A URL for the event
   */
  url: string;

  /**
   * The optional large image
   */
  imageLarge?: string;

  /**
   * The optional small image
   */
  imageSmall?: string;

  /**
   * The alt text for the image
   */
  imageAltText?: string;

  /**
   * Should the link have padding. Defaults to true
   */
  hasPadding?: boolean;

  /**
   * Is the link a promoted link. Defaults to false.
   */
  isPromoted?: boolean;

  /**
   * The optional parent service landing page title
   */
  parentTitle?: string | null;
}
