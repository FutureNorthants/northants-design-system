
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
}
