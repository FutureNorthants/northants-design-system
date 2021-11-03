
export interface AutocompleteProps {
    /**
     * Name attribute of the input control
     */
    name: string;

    /**
     * Text content of the label for the control
     */
     labelText?: string;

    /**
     * Default value of the input control
     */
     value?: string;

    /**
     * Placeholder within the input control
     */
     placeholder?: string;

    /**
     * Controls the input control's error state
     */
     isErrored?: boolean;

    /**
     * Text to display if input control is in error state
     */
     errorText?: string;

    /**
     * Array of suggestion strings
     */
     suggestions: string[];

    /**
     * Controls whether suggestions are shown immediately (if value set also)
     */
     showSuggestions?: boolean;

    /**
     * The minimum number of characters that need to be typed before matches in the suggestions list are looked for
     */
     minimumMatchLength: number;

    /**
     * Callback function for when a suggestion is selected
     */
     onSelect?: Function;
}
