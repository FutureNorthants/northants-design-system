import React from 'react';

export interface FormWithLineProps {
  /**
   * The colour of the line
   */
  lineColour?: string;

  /**
   * An optional boolean to hide the line
   */
  hideLine?: boolean;

  /**
   * The role of the form
   */
  formRole?: string;

  /**
   * The method of the form
   */
  formMethod?: string;

  /**
   * The url of the form
   */
  formURL?: string;

  /**
   * An optional boolean to set the form as an error - if true, the lineColour will be replaced with red
   */
  isError?: boolean;

  /**
   * An optional string to explain the error
   */
  errorSummary?: string;

  /**
   * An optional function to be called on the submit of the form
   */
  onSubmit?: React.ReactNode | ((e: any) => void);

  /**
   * The FormWithLine contents
   */
  children: React.ReactNode;
}
