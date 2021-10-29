export interface AutocompleteSuggestionItem {
    name: string;
}

export interface AutocompleteProps {
    name: string;                 // name of the control
    labelText?: string;           // text of label for control, if any
    value?: string;               // content of the input
    placeholder?: string;         // placeholder text in the input field
    isErrored?: boolean;          // true if in error state
    errorText?: string;           // optional explanatory error text
    suggestions: string[];        // suggestions to compare input value with
    showSuggestions?: boolean;    // true to show matching suggestions list
    minimumMatchLength: number;   // defaults to 2
    onSelect?: Function;          // fires when suggestion clicked on
}
