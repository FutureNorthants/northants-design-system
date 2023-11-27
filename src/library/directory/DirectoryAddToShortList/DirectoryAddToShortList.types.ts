import { PhysicalAddressProps } from '../DirectoryService/DirectoryService.types';

export interface DirectoryAddToShortListProps {
  /**
   * The unique identifier
   */
  id: string;

  /**
   * The service name
   */
  name: string;

  /**
   * A snippet from the service description
   */
  snippet: string;

  /**
   * The optional contact email address
   */
  email?: string;

  /**
   * The optional website address
   */
  website?: string;

  /**
   * The optional phone number
   */
  phone?: string;

  /**
   * The optional addresses
   */
  addresses?: PhysicalAddressProps[];

  /**
   * The optional fees for the service
   */
  fees?: string;
}
