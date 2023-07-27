export interface ServiceContactComponentProps {
  /**
   * The optional email address
   */
  email?: string;

  /**
   * The optional website address
   */
  website?: string;

  /**
   * An array of service contacts. May be empty.
   */
  contacts: ServiceContactProps[];
}

export interface ServiceContactProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * The name of the contact
   */
  name: string;

  /**
   * The job title of the contact
   */
  title: string;

  /**
   * The array of phone numbers
   */
  phones: PhoneProps[];
}

export interface PhoneProps {
  /**
   * The unique identifier
   */
  id: number;

  /**
   * The telephone number
   */
  number: string;
}
