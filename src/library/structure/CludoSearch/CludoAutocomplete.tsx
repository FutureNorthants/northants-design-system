import React from 'react';
import {
  autocompleteHandleInputBlur,
  autocompleteHandleInputChange,
  autocompleteHandleInputKeyDown,
  SaytSuggestion,
  SearchInput,
  useAutocomplete,
} from '@cludosearch/cludo-search-components';
import * as Styles from './CludoSearch.styles';

const CludoAutoComplete = () => {
  const [autocompleteState, autocompleteDispatchers] = useAutocomplete();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    autocompleteHandleInputChange(e, autocompleteDispatchers);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    autocompleteHandleInputBlur(e, autocompleteDispatchers);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    autocompleteHandleInputKeyDown(e, autocompleteDispatchers);
  };
  return (
    <Styles.AutocompleteContainer>
      <SearchInput
        className="wnc-cludo-input"
        formId="search"
        ariaLabel="Search the website"
        onChange={handleChange}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
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
      </Styles.AutocompleteList>
    </Styles.AutocompleteContainer>
  );
};

export default CludoAutoComplete;
