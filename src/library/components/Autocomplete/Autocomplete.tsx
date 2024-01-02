import React, { useState } from 'react';
import { AutocompleteProps } from './Autocomplete.types';
import { ErrorText } from '../Input/Input.styles';
import * as Styles from './Autocomplete.styles';
import Downshift from 'downshift';

/**
 * Autocomplete input; Downshift wrapped around our Input component but with the capability to
 * accept a list of suggestions which are presented to the user as they type and which they can
 * click on to select. If viewing in Storybook, try typing the name of a fruit in the story examples.
 */
const Autocomplete: React.FunctionComponent<AutocompleteProps> = ({
  id = 'autocomplete',
  name = 'autocomplete',
  labelText,
  hasHiddenLabel = false,
  value,
  size,
  placeholder,
  isErrored = false,
  errorText,
  suggestions = [],
  showSuggestions = false,
  minimumMatchLength = 2,
  maximumMatchesShown = 5,
  isLarge = false,
  hasAdjacentButton = false,
  onSelect,
  onChange,
  required = false,
  hasLightBackground = true,
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
      setInputValue(changes.selectedItem);
      if (onSelect) {
        onSelect(changes.selectedItem);
      }
    } else if (changes.hasOwnProperty('inputValue')) {
      setInputValue(changes.inputValue);
      if (onChange) {
        onChange(changes.inputValue);
      }
    }
  }

  /**
   * Breaks the suggestion text up into bits that match the input and bits that
   * don't, so we can apply different styling to highlight the match(es).
   */
  function getItemTextChunks(item: string, input: string): JSX.Element[] {
    const escapedInput = input.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    let regex = new RegExp('(' + escapedInput + ')', 'ig');
    let chunks = item.split(regex);
    let results = [];
    let key = 1;
    chunks.forEach((chunk) => {
      if (chunk !== '') {
        if (chunk.toLowerCase() === input.toLowerCase()) {
          results.push(
            <Styles.AutocompleteSuggestionTextMatch key={key++}>{chunk}</Styles.AutocompleteSuggestionTextMatch>
          );
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
    const input = inputvalue.toLowerCase();
    for (const item of suggestions) {
      if (item.toLowerCase().includes(input)) {
        filteredsuggestions.push(item);
      }
      if (filteredsuggestions.length === maximumMatchesShown) break;
    }
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
      <Downshift
        id={id}
        labelId={id + '-label'}
        inputId={id + '-input'}
        menuId={id + '-menu'}
        onStateChange={handleStateChange}
        selectedItem={inputvalue ? inputvalue : ''}
        initialIsOpen={showSuggestions}
      >
        {({ getInputProps, getItemProps, getLabelProps, getMenuProps, isOpen, inputValue, getRootProps }) => (
          <div>
            <Styles.AutocompleteLabel {...getLabelProps()} hasHiddenLabel={hasHiddenLabel}>
              {labelText ? labelText : placeholder}
            </Styles.AutocompleteLabel>
            {isErrored && errorText && (
              <>
                {hasLightBackground ? (
                  <ErrorText>{errorText}</ErrorText>
                ) : (
                  <Styles.LightErrorText>{errorText}</Styles.LightErrorText>
                )}
              </>
            )}
            <div {...getRootProps(undefined, { suppressRefError: true })}>
              <Styles.AutocompleteTextInput
                {...getInputProps({
                  name: name,
                  value: inputValue,
                  placeholder: placeholder,
                  isErrored: isErrored,
                  isOpen: isOpen && filteredsuggestions.length > 0,
                  isLarge: isLarge,
                  hasAdjacentButton: hasAdjacentButton,
                  size: size,
                })}
                aria-required={required ? 'true' : 'false'}
                aria-invalid={isErrored ? 'true' : 'false'}
              />
            </div>
            {
              // can't rely just on isOpen or we can end up displaying an empty suggestions list
              isOpen && filteredsuggestions.length > 0 ? (
                <Styles.AutocompleteSuggestionList
                  {...getMenuProps({
                    'aria-labelledby': null,
                    'aria-label': 'Suggestion',
                    title: 'Suggestion',
                  })}
                  isLarge={isLarge}
                >
                  {
                    // Here we are turning our filtered suggestions into list items
                    filteredsuggestions.map((item, index) => {
                      return (
                        <Styles.AutocompleteSuggestionItem
                          {...getItemProps({
                            key: item,
                            index: index,
                            item: item,
                          })}
                          isLarge={isLarge}
                        >
                          {getItemTextChunks(item, inputValue)}
                        </Styles.AutocompleteSuggestionItem>
                      );
                    })
                  }
                </Styles.AutocompleteSuggestionList>
              ) : (
                ''
              )
            }
          </div>
        )}
      </Downshift>
    </>
  );
};

export default Autocomplete;
