import { FieldErrors } from 'react-hook-form';

export interface ErrorSummaryProps {
  /**
   * The errors object from react-hook-form
   */
  errors?: FieldErrors<ErrorProps>;
}

export interface ErrorProps {
  /**
   * The error message
   */
  message: string;

  /**
   * The type of error
   */
  type: string;
}
