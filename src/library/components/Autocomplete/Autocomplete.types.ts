/**
 * See the stories file for explanation of each property or view the control in Storybook
 */
export interface AutocompleteProps {
    name: string;
    labelText?: string;
    value?: string;
    placeholder?: string;
    isErrored?: boolean;
    errorText?: string;
    suggestions: string[];
    showSuggestions?: boolean;
    minimumMatchLength: number;
    onSelect?: Function;
}
