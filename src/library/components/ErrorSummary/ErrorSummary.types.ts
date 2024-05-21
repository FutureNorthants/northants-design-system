export interface ErrorSummaryProps {
  /**
   * The errors object from react-hook-form
   */
  errors?: Record<string, ErrorProps>;
}

export interface ErrorProps {
  /**
   * The error message
   */
  message?: string;

  /**
   * The type of error
   */
  type?: string | number;
}
