import React, { useState } from 'react';
import { DirectoryDocumentsProps } from './DirectoryDocuments.types';
import * as Styles from './DirectoryDocuments.styles';
import Row from '../../components/Row/Row';
import FileDownload from '../../components/FileDownload/FileDownload';
import Column from '../../components/Column/Column';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import FormButton from '../../components/FormButton/FormButton';
import Input from '../../components/Input/Input';
import Pagination from '../../components/Pagination/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { AlertBannerService } from '../../structure/PageStructures';

/**
 * A slice to display and search documents from the directory system.
 * The searching and loading of data will be done in the frontend and the documents passed in to the component
 */
const DirectoryDocuments: React.FunctionComponent<DirectoryDocumentsProps> = ({
  documents,
  search = '',
  setSearch,
  totalResults = 0,
  pageNumber = 1,
  setPageNumber,
  perPage = 10,
  isLoading = false,
  isError = false,
  searchLabel = 'Search documents',
}) => {
  const [searchTerm, setSearchTerm] = useState(search);

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
  };

  const from = pageNumber * perPage - (perPage - 1);
  const to = from + (documents?.length ? documents.length - 1 : 0);

  return (
    <Styles.Container data-testid="DirectoryDocuments">
      <FormWithLine onSubmit={submitSearch} hideLine>
        <Row>
          <Column small="full" medium="one-half" large="one-half">
            <Styles.Label htmlFor="documentSearch">{searchLabel}</Styles.Label>
            <Input
              name="documentSearch"
              type="text"
              defaultValue={searchTerm}
              id="documentSearch"
              onChange={(e) => setSearchTerm(e.target.value)}
              isFullWidth
            />
          </Column>
          <Column small="full" medium="one-half" large="one-half">
            <Styles.ButtonContainer>
              <FormButton text="Search" size="large" type="submit" onClick={submitSearch} />
            </Styles.ButtonContainer>
          </Column>
        </Row>
      </FormWithLine>
      <Row>
        {isError ? (
          <Column small="full" medium="full" large="full">
            <AlertBannerService>
              <p>Sorry, there was a problem fetching results. Please try again later.</p>
            </AlertBannerService>
          </Column>
        ) : isLoading ? (
          <Styles.LoadingContainer>
            <LoadingSpinner />
            <p>Loading</p>
          </Styles.LoadingContainer>
        ) : (
          <>
            {documents.map((document) => (
              <Column small="full" medium="full" large="full" key={document.id}>
                <Styles.DocumentContainer>
                  <FileDownload
                    title={document.file.title}
                    type={document.file.type}
                    url={document.file.url}
                    size={document.file.size}
                    archived={document.file.archived}
                  />
                  <Styles.DocumentDescription>{document.description}</Styles.DocumentDescription>
                </Styles.DocumentContainer>
              </Column>
            ))}
            {documents.length === 0 && (
              <Column small="full" medium="full" large="full">
                <p>No results found.</p>
              </Column>
            )}
          </>
        )}

        <Column small="full" medium="full" large="full">
          {!isLoading && (
            <Pagination
              currentPage={pageNumber}
              totalResults={totalResults}
              resultsPerPage={perPage}
              postTo=""
              buttonClickOverride={setPageNumber}
            />
          )}
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryDocuments;
