
export interface SearchbarProps {
    /**
     * Placeholder text
     */
    placeholder?: string;
    /**
     * Whether or not this is the light version of the search
     */
    isLight?: boolean
    /**
     * If its used on its own (eg search results page) then its slightly larger
     */
    isLarge?: boolean;
    /**
     * The searched for term
     */
    searchTerm?: string;
    /**
     * 
     */
    submitInfo: Array<SubmitInfoProps>;
}

export interface SubmitInfoProps {
  /**
   * where we're posting the form to eg /search or /news
   */
  postTo: string;
  /**
   * combined
   */
  params: object;
}


export interface ParamsProps {
    /**
     * where we're posting the form to eg /search or /news
     */
    key: string;
    /**
     * Link to page
     */
    value: string;
  }
  
