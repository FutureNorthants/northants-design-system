import React, { useState, useEffect } from "react";
import { SearchbarProps } from "./Searchbar.types";
import * as Styles from "./Searchbar.styles";
import { handleParams } from "./../../helpers/url-helpers.js";
import SearchIcon from "../../components/icons/SearchIcon/SearchIcon";
import { NewsArticleFilterFields } from "./../NewsArticleFilterAccordion/NewsArticleFilterAccordionText";
import Autocomplete from "../../components/Autocomplete/Autocomplete";

const Searchbar: React.FunctionComponent<SearchbarProps> = ({
  placeholder = "Search",
  isLight,
  isLarge,
  searchTerm = "",
  submitInfo,
  id = "search",
  suggestions = [],
  minimumMatchLength = 2,
  maximumMatchesShown = 5,
}) => {
  let initialSearchTerm = searchTerm;
  let [inputSearchTerm, setInputSearchTerm] = useState(initialSearchTerm);
  let [submit, setSubmit] = useState(false);
  let [isErrored, setIsErrored] = useState(false);

  /**
   * An autocomplete suggestion item was selected, so kick off submission
   * @param selectedValue string - suggestion text chosen
   */
  function handleSelect(selectedValue: string): void {
    setInputSearchTerm(selectedValue);
    setSubmit(true);
  }

  /**
   * Contents of search input changed
   * @param inputValue string - text input
   */
  function handleChange(inputValue: string): void {
    setInputSearchTerm(inputValue);
  }

  /**
   * Run after every render if the dependencies in the array change; we use this to check if submit
   * has been set to true and if so, we submit the search.
   */
  useEffect(
    () => {
      if (isErrored) {
        setIsErrored(false);
      }

      if (!submit) return;
      setSubmit(false);

      let submitParams = submitInfo.params;
      if (
        initialSearchTerm !== inputSearchTerm ||
        !(NewsArticleFilterFields.search.queryParamKey in submitParams)
      ) {
        submitParams = { ...submitParams, searchTerm: inputSearchTerm };
        let keyValueFormat = Object.keys(submitParams).map(function (key) {
          return { key, value: submitParams[key] };
        });
        handleParams(submitInfo.postTo, keyValueFormat, ["page"]);
      }
    },
    [submit, submitInfo, initialSearchTerm, inputSearchTerm, handleParams] // dependencies that this function relies upon
  );

  /**
   * Form submission event, kick off submission via the above post-render useEffect() hook by setting submit state to true
   * @param event Event
   */
  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (inputSearchTerm == "") {
      if (!isErrored) {
        setIsErrored(true);
      }

      return;
    }

    setSubmit(true);
  };

  /**
   * Render the component
   */
  return (
    <Styles.Container data-testid="Searchbar" isLarge={isLarge}>
      <form onSubmit={handleSubmit}>
        <div role="search">
          <Styles.InputWrapper>
            <Autocomplete
              id={id}
              name={NewsArticleFilterFields.search.queryParamKey}
              placeholder={placeholder}
              onSelect={handleSelect}
              onChange={handleChange}
              value={inputSearchTerm}
              suggestions={suggestions}
              minimumMatchLength={minimumMatchLength}
              maximumMatchesShown={maximumMatchesShown}
              isLarge={isLarge}
              hasAdjacentButton
              isErrored={isErrored}
              hasHiddenLabel={true}
            />
            <Styles.Button
              type="submit"
              value="Search"
              isLarge={isLarge}
              isLight={isLight}
              data-testid="SearchButton"
            >
              <SearchIcon colourFill="#fff" />
              <Styles.ButtonText>Search</Styles.ButtonText>
            </Styles.Button>
          </Styles.InputWrapper>
        </div>
      </form>
    </Styles.Container>
  );
};

export default Searchbar;
