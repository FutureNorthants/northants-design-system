import React, {useState} from "react";
import { AutocompleteProps } from "./Autocomplete.types";
import { StyledInput, ErrorText} from "../Input/Input.styles";
import Downshift from "downshift";
import { action } from '@storybook/addon-actions';
import "./Autocomplete.css";

/**
 * Autocomplete input; Downshift wrapped around our Input component but with the capability to
 * accept a list of suggestions which are presented to the user as they type and which they can
 * click on to select. If viewing in Storybook, try typing the name of a fruit in the story examples.
 */
const Autocomplete: React.FunctionComponent<AutocompleteProps> = ({
  name,
  labelText,
  value,
  placeholder,
  isErrored,
  errorText,
  suggestions,
  showSuggestions,
  minimumMatchLength,
  onSelect
}) => {

  /**
   * We save the input value in state or we can't cope with leaving the input
   * without selecting a matching suggestion.
   */
  const [inputvalue, setInputValue] = useState(value);
  
  /**
   * For component state changes that affect the input value, we copy the
   * value into our saved state, and fire the onSelect handler if the change
   * is that a suggestion was chosen.
   */
  function handleStateChange(changes: any, stateAndHelpers: object) {
    if (changes.hasOwnProperty('selectedItem')) {
      action('onSelect');
      if (onSelect) {
        onSelect(changes.selectedItem);
      }
      setInputValue(changes.selectedItem);
    } else if (changes.hasOwnProperty('inputValue')) {
      setInputValue(changes.inputValue);
    }
  }

  /**
   * We pre-filter the suggestions so we can decide whether to display the 
   * suggestions div based on whether there are any matching suggestions 
   * actually available. This avoids showing an empty div when you delete 
   * what you've typed and go back to having no matching suggestions.
   */
  let filteredsuggestions = [];
  if (inputvalue && inputvalue.length >= minimumMatchLength) {
    filteredsuggestions = suggestions.filter(item => item.toLowerCase().includes(inputvalue.toLowerCase()));
  } else {
    filteredsuggestions = [];
  }

  /** 
   * Rendered control, wrapped in a Downshift element for all the magic it
   * provides. If we don't provide selectedItem in the props, it'll act like a
   * select box rather than an autocomplete and disallow inputs that don't match
   * a suggestion.
   */
  return (
    <>
      <Downshift onStateChange={handleStateChange} selectedItem={inputvalue} initialIsOpen={showSuggestions}> 
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          getRootProps
        }) => (
          <div>
            <label {...getLabelProps()}>{labelText}</label>
            {isErrored && errorText ? <ErrorText>{errorText}</ErrorText> : ""}
            <div
              {...getRootProps(undefined, { suppressRefError: true })}
            >
              <StyledInput {...getInputProps({ 
                name: name,
                placeholder: placeholder, 
                isErrored: isErrored,
                className: "autocomplete-input"
              })} />
            </div>
            {
            // can't rely just on isOpen or we can end up displaying an empty suggestions list
            isOpen && filteredsuggestions.length > 0 ?
            <ul {...getMenuProps({'aria-labelledby' : null})}
              className = "autocomplete-dropdown"
              arial-label = "Suggestion"
              title = "Suggestion"
            >
              {
                // Here we are turning our filtered suggestions into list items
                filteredsuggestions.map((item, index) => {
                  let class_name = "autocomplete-item" + 
                    (highlightedIndex === index ? " autocomplete-item-highlighted" : "");
                  return (
                    <li
                      className = {class_name}
                      {...getItemProps({ key: item, index, item })}
                      // not so dangerous as our suggestions are not going to be unsanitized user input
                      dangerouslySetInnerHTML = {
                        {__html: item.replace(new RegExp(inputValue, "ig"), (match: string) =>
                          '<span class="autocomplete-match">' + match + '</span>')}
                      }
                    /> 
                  )
                })
              }
            </ul>
            : ''}
          </div>
        )}
      </Downshift>
    </>
  );
};

export default Autocomplete;
