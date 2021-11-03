import React, {useState} from "react";
import { AutocompleteProps } from "./Autocomplete.types";
import { ErrorText} from "../Input/Input.styles";
import * as Styles from "./Autocomplete.styles";
import Downshift from "downshift";

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
  isErrored = false,
  errorText,
  suggestions = [],
  showSuggestions = false,
  minimumMatchLength = 2,
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
  function handleStateChange(changes: any, stateAndHelpers: object): void {
    if (changes.hasOwnProperty('selectedItem')) {
      if (onSelect) {
        onSelect(changes.selectedItem);
      }
      setInputValue(changes.selectedItem);
    } else if (changes.hasOwnProperty('inputValue')) {
      setInputValue(changes.inputValue);
    }
  }

  /**
   * Breaks the suggestion text up into bits that match the input and bits that
   * don't, so we can apply different styling to highlight the match(es).
   */
  function getItemTextChunks(item: string, input: string): JSX.Element[] {
    let regex = new RegExp("(" + input + ")", "ig");
    let chunks = item.split(regex);
    let results = [];
    let key = 1;
    chunks.forEach(chunk => {
      if (chunk !== "") {
        if (chunk.toLowerCase() === input.toLowerCase()) {
          results.push(<Styles.AutocompleteSuggestionTextMatch key={key++}>{chunk}</Styles.AutocompleteSuggestionTextMatch>);
        } else {
          results.push(<Styles.AutocompleteSuggestionText key={key++}>{chunk}</Styles.AutocompleteSuggestionText>);
        }
      }
    });
    return results;
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
      <Downshift onStateChange={handleStateChange} selectedItem={inputvalue ? inputvalue : ""} initialIsOpen={showSuggestions}> 
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          getRootProps
        }) => (
          <div>
            <label {...getLabelProps()}>{labelText}</label>
            {isErrored && errorText ? <ErrorText>{errorText}</ErrorText> : ""}
            <div
              {...getRootProps(undefined, { suppressRefError: true })}
            >
              <Styles.AutocompleteInput {...getInputProps({ 
                name: name,
                placeholder: placeholder, 
                isErrored: isErrored
              })} />
            </div>
            {
            // can't rely just on isOpen or we can end up displaying an empty suggestions list
            isOpen && filteredsuggestions.length > 0 ?
              <Styles.AutocompleteSuggestionList {...getMenuProps({'aria-labelledby' : null})}
                arial-label = "Suggestion"
                title = "Suggestion"
              >
                {
                  // Here we are turning our filtered suggestions into list items
                  filteredsuggestions.map((item, index) => {
                    return (
                      <Styles.AutocompleteSuggestionItem
                        {...getItemProps({ key: item, index, item })}
                      > 
                        { getItemTextChunks(item, inputValue) }
                      </Styles.AutocompleteSuggestionItem>
                    )
                  })
                }
              </Styles.AutocompleteSuggestionList>
            : ''
            }
          </div>
        )}
      </Downshift>
    </>
  );
};

export default Autocomplete;
