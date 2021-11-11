export interface SearchbarProps {
    /**
     * ID passed to the Autocomplete component
     */
    id?: string;

    /**
     * The searched for term
     */
    searchTerm?: string;

    /**
     * Placeholder text
     */
    placeholder?: string;

    /**
     * Whether or not this is the light version of the search
     */
    isLight?: boolean

    /**
     * If used on it's own (eg search results page) then will be slightly larger
     */
    isLarge?: boolean;

    /**
     * Array of suggestion strings for autocomplete input
     */
    suggestions?: string[];

    /**
     * The minimum number of characters that need to be typed before matches in the suggestions list are looked for
     */
     minimumMatchLength?: number;

    /**
     * Where to post the form submission to and what params to use
     */
    submitInfo?: SubmitInfoProps;
}

export interface SubmitInfoProps {
  /**
   * Where we're posting the form to eg /search or /news
   */
  postTo: string;

  /**
   * Any additional parameters to send
   */
  params: object;
}
