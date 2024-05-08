import { Dispatch, SetStateAction } from 'react';
import { RateFormInputs } from './RateThisPage';

export interface RateThisPageProps {
  /**
   * The function for when the form is submitted.
   * See https://react-hook-form.com/get-started for the onSubmit example
   */
  onSubmit: (e: RateFormInputs) => void;

  /**
   * The link to the complaints form.
   * This should include the current page url
   */
  complaintsFormLink: string;

  /**
   * Is the form loading?
   */
  isLoading?: boolean;

  /**
   * The function to update whether the form is currently loading
   */
  setIsLoading?: Dispatch<SetStateAction<boolean>>;

  /**
   * Is the form submission successful?
   */
  isSuccessful?: boolean;

  /**
   * Did the form submission trigger an error?
   */
  isError?: boolean;
}
