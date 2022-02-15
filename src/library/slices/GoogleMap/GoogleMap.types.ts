export interface GoogleMapProps {
  /**
   * Title text. Optional. Rev 1
   */
  title?: string;

  /**
   * The description text displayed under the title and above the map. Optional.
   */
  description?: string;

  /**
   * The map's iframe code as provide by the 'Embed a map' sharing option on Google Maps.
   * Used if cookies have been accepted.
   */
  iframe_html: string;

  /**
   * The map's URL as provided by the 'Send a link' sharing option on Google Maps.
   * Used if cookies have not been accepted; a link will be displayed instead of an embed.
   */
  link_url: string;

  /**
   * Title for the link used if cookies were not accepted. Optional.
   */
  link_title?: string;

  /**
   * Allow overriding if cookies are allowed (for stories).
   */
  allowCookies?: boolean;
}
