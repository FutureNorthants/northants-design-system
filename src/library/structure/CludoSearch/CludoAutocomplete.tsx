import React, { useState } from 'react';
import {
  autocompleteHandleInputBlur,
  autocompleteHandleInputChange,
  autocompleteHandleInputKeyDown,
  SaytSuggestion,
  SearchInput,
  useAutocomplete,
} from '@cludosearch/cludo-search-components/ssr';
import * as Styles from './CludoSearch.styles';
import { CludoAutoCompleteProps } from './CludoAutocomplete.types';
import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';

const CludoAutoComplete: React.FunctionComponent<CludoAutoCompleteProps> = ({ hasMargin = true }) => {
  const [autocompleteState, autocompleteDispatchers] = useAutocomplete();
  const [searchIsFocused, setSearchIsFocused] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    autocompleteHandleInputChange(e, autocompleteDispatchers);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    autocompleteHandleInputBlur(e, autocompleteDispatchers);
    setSearchIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    autocompleteHandleInputKeyDown(e, autocompleteDispatchers);
  };
  return (
    <Styles.AutocompleteContainer $hasMargin={hasMargin}>
      <SearchInput
        className="wnc-cludo-input"
        formId="search"
        attributes={{
          submitButton: {
            'aria-label': 'Submit button',
          },
          input: {
            'aria-label': 'Search the website',
          },
        }}
        submitIcon={<SearchIcon colourFill="#fff" />}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onFocus={() => setSearchIsFocused(true)}
      />
      <Styles.AutocompleteList>
        {autocompleteState.suggestions.map((suggestion, index) => {
          return (
            <SaytSuggestion
              disableTheme={true}
              key={suggestion.title + index}
              suggestion={suggestion}
              isSelected={autocompleteState.selectedSuggestion === index}
              suggestionIndex={index}
            />
          );
        })}
        {searchIsFocused && (
          <>
            {autocompleteState.instantSuggestions.map((suggestion, index) => {
              return (
                <SaytSuggestion
                  disableTheme={true}
                  key={suggestion.title + index}
                  suggestion={suggestion}
                  isSelected={autocompleteState.selectedSuggestion === index}
                  suggestionIndex={index}
                />
              );
            })}
          </>
        )}
      </Styles.AutocompleteList>
    </Styles.AutocompleteContainer>
  );
};

export default CludoAutoComplete;
