
export interface AutocompleteProps {
    name: string;                // name of the control
    value?: string;              // content of the input
    placeholder?: string;        // placeholder text in the input field
    isErrored?: boolean;         // true if in error state
    errorText?: string;          // optional explanatory error text
    suggestions?: string[];      // suggestions to compare input value with
    show_suggestions?: boolean;  // true to show matching suggestions list
}
