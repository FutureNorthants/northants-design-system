
export interface CookieBannerProps {
  /**
   * Title of cookie banner
   */
  title: string;
  /**
   * Paragraph about cookies
   */
  paragraph: React.ReactNode;
  /**
   * Accept all button text
   */
  acceptButtonText: string;
  /**
   * Confirmation of acceptance text
   */
  acceptConfirmationText?: string;
  /**
   * Reject all button text
   */
  rejectButtonText: string;
  /**
   * Confirmation of rejection text
   */
  rejectConfirmationText?: string;
  /**
   * gets called on accept - lets you do extra things - like set the 🍪
   */
  acceptCallback?: Function;
}
