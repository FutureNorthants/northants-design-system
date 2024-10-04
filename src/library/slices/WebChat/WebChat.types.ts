import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';

export interface WebChatProps {
  /**
   * The WebChat base url
   */
  action: string;

  /**
   * The text for the button
   */
  buttonText: string;

  /**
   * The enquiry types
   */
  queues: DropDownSelectOptionsProps[];

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
