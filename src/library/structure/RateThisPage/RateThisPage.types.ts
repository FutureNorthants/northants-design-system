export interface RateThisPageProps {
  /**
   * The function for when the form is submitted.
   * See https://react-hook-form.com/get-started for the onSubmit example
   */
  onSubmit: (e: any) => void;

  /**
   * The link to the complaints form.
   * This should include the current page url
   */
  complaintsFormLink: string;
}
