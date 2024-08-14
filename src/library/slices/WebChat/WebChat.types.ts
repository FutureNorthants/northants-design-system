export interface WebChatProps {
  /**
   * The text for the button
   */
  buttonText: string;

  /**
   * The WebChat base url
   */
  action: string;

  /**
   * Force the webchat to be unavailable
   */
  forceUnavailable?: boolean;

  /**
   * The text to display when webchat is unavailable
   */
  unavailableMessage?: string;
}

export interface WebChatFormInputs {
  name: string;
  enquiryType: string;
  email?: string;
  telephone?: string;
  reference?: string;
  subject: string;
}
