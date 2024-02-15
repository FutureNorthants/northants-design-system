export interface StreamingVideoProps {
  /**
   * The video source url
   */
  src: string;

  /**
   * The format type of the video (defaults to HLS)
   */
  type?: string;

  /**
   * An optional title
   */
  title?: string;

  /**
   * Should the video autoplay (false by default)
   */
  autoplay?: boolean;

  /**
   * Should the controls be shown (true by default)
   */
  controls?: boolean;

  /**
   * Should the controls vary based on the screen size (true by default)
   */
  responsive?: boolean;

  /**
   * Should the video fill the users screen (true by default)
   */
  fluid?: boolean;

  /**
   * An optional on ready method
   */
  onReady?: (player) => {};
}
