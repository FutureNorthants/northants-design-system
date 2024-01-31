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

  setIsLoading?: Dispatch<SetStateAction<boolean>>;

  /**
   * Is the form submission successful?
   */
  isSuccessful?: boolean;
}
