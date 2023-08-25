import React, { useState } from 'react';
import { DirectoryDocumentListProps } from './DirectoryDocumentList.types';
import * as Styles from './DirectoryDocumentList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import HintText from '../../components/HintText/HintText';
import Input from '../../components/Input/Input';
import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';
import RadioCheckboxInput from '../../components/RadioCheckboxInput/RadioCheckboxInput';
import FileDownload from '../../components/FileDownload/FileDownload';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Pagination from '../../components/Pagination/Pagination';

const DirectoryDocumentList: React.FunctionComponent<DirectoryDocumentListProps> = ({
  directoryPath,
  documents,
  search = '',
  setSearch,
  totalResults = 0,
  pageNumber = 1,
  setPageNumber,
  perPage = 10,
  categories,
  setCategories,
  isLoading = false,
}) => {
  const [searchTerm, setSearchTerm] = useState(search);

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };

  const optionChecked = (e, categoryIndex: number, singleSelection: boolean) => {
    let newCategories = [...categories];

    if (singleSelection) {
      newCategories[categoryIndex].options.forEach((option) => {
        option.checked = false;
      });
    }

    newCategories[categoryIndex].options.find((option) => {
      if (option.id === e.target.value) {
        option.checked = !option.checked;
      }
    });

    setCategories(newCategories);
  };

  /**
   * Uncheck all the options for a specific category
   */
  const clearCategory = (categoryIndex: number) => {
    let newCategories = [...categories];

    newCategories[categoryIndex].options.forEach((option) => {
      option.checked = false;
    });

    setCategories(newCategories);
  };

  const from = pageNumber * perPage - (perPage - 1);
  const to = from + (documents?.length ? documents.length - 1 : 0);

  return (
    <Styles.Container data-testid="DirectoryDocumentList">
      <Row>
        <Column small="full" medium="full" large="full">
          <Styles.SearchHeader>
            <FormWithLine hideLine onSubmit={submitSearch}>
              <Row>
                <Column small="full" medium="one-half" large="one-third">
                  <Styles.Label htmlFor="directorySearch">What are you looking for?</Styles.Label>
                  <HintText text="Enter a search word or phrase" />
                  <Input
                    name="directorySearch"
                    type="text"
                    defaultValue={searchTerm}
                    id="directorySearch"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </Column>
                <Column small="full" medium="one-half" large="one-third">
                  <Styles.ButtonContainer>
                    <Styles.Button onClick={submitSearch} type="submit">
                      <Styles.ButtonText>Search</Styles.ButtonText>
                      <SearchIcon colourFill="#fff" />
                    </Styles.Button>
                  </Styles.ButtonContainer>
                </Column>
              </Row>
            </FormWithLine>
          </Styles.SearchHeader>
        </Column>
        <Column small="full" medium="one-third" large="one-third">
          <Row>
            <Column small="full" medium="full" large="full">
              <Styles.ResultInfo>Refine your search</Styles.ResultInfo>
            </Column>
            {categories?.map((category, categoryIndex) => (
              <Column small="full" medium="full" large="full" key={category.label}>
                <Styles.Fieldset>
                  <Styles.Legend>{category.label}</Styles.Legend>

                  <Styles.ClearFilter>
                    <Styles.TextLink onClick={(e) => clearCategory(categoryIndex)}>Clear filter</Styles.TextLink>
                  </Styles.ClearFilter>

                  {category.options.map((taxonomy) => (
                    <Styles.Category key={taxonomy.id}>
                      <RadioCheckboxInput
                        name={taxonomy.vocabulary}
                        value={taxonomy.id}
                        label={taxonomy.name}
                        singleSelection={category.singleSelection}
                        checked={taxonomy.checked}
                        onChange={(e) => optionChecked(e, categoryIndex, category.singleSelection)}
                      />
                    </Styles.Category>
                  ))}
                </Styles.Fieldset>
              </Column>
            ))}
          </Row>
        </Column>
        <Column small="full" medium="two-thirds" large="two-thirds">
          <Row>
            {isLoading ? (
              <Styles.LoadingContainer>
                <LoadingSpinner />
                <p>Loading</p>
              </Styles.LoadingContainer>
            ) : (
              <>
                <Column small="full" medium="full" large="full">
                  {documents?.length > 0 ? (
                    <Styles.ResultInfo>
                      Showing {from} to {to} out of {totalResults.toLocaleString()}
                    </Styles.ResultInfo>
                  ) : (
                    <Styles.ResultInfo>No results found</Styles.ResultInfo>
                  )}
                </Column>
                {documents?.map((document) => (
                  <Column small="full" medium="full" large="full" key={document.id}>
                    <Styles.DocumentContainer>
                      <FileDownload {...document.file} />
                      <Styles.DocumentDescription>{document.description}</Styles.DocumentDescription>
                    </Styles.DocumentContainer>
                  </Column>
                ))}
              </>
            )}

            <Column small="full" medium="full" large="full">
              {!isLoading && (
                <Pagination
                  currentPage={pageNumber}
                  totalResults={totalResults}
                  resultsPerPage={perPage}
                  postTo={directoryPath}
                  buttonClickOverride={setPageNumber}
                />
              )}
            </Column>
          </Row>
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryDocumentList;
