export interface ConsultationLinkProps {
  /**
   * A unique identifier for the consultation
   */
  id: string;

  /**
   * The title of the consultation
   */
  title: string;

  /**
   * A summary of the consultation
   */
  summary?: string;

  /**
   * Should the summary be shown? Defaults to false
   */
  showSummary?: boolean;

  /**
   * The open date of the consultation
   */
  openDate: string;

  /**
   * The end date of the consultation
   */
  closeDate: string;

  /**
   * The optional parent service landing page title
   */
  parentTitle?: string | null;

  /**
   * A URL for the consultation
   */
  url: string;

  /**
   * The optional large image
   */
  imageLarge?: string | null;

  /**
   * The optional small image
   */
  imageSmall?: string | null;

  /**
   * The alt text for the image
   */
  imageAltText?: string | null;

  /**
   * Should the link have padding? Defaults to false.
   */
  hasPadding?: boolean;
}
