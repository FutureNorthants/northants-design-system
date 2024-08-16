import React from 'react';
import { EventListProps } from './EventList.types';
import * as Styles from './EventList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import { NewsArticleFilterAccordion } from '../PageStructures';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';
import Input from '../../components/Input/Input';
import Pagination from '../../components/Pagination/Pagination';
import EventDetails from '../../components/EventDetails/EventDetails';
import EventLink from '../../components/EventLink/EventLink';
import { transformSnippet } from '../../directory/DirectoryService/DirectoryServiceTransform';

const EventList: React.FunctionComponent<EventListProps> = ({
  results,
  pageNumber = 1,
  sortBy,
  setSortBy,
  totalResults = 0,
  filters,
}) => {
  const sortByOptions: DropDownSelectOptionsProps[] = [
    {
      title: 'Most recent first',
      value: 'asc',
    },
    {
      title: 'Oldest first',
      value: 'desc',
    },
  ];
  return (
    <Styles.Container data-testid="EventList">
      <Row>
        <Column small="full" medium="one-third" large="one-third">
          <NewsArticleFilterAccordion sections={filters} />
        </Column>
        <Column small="full" medium="two-thirds" large="two-thirds">
          <Styles.EventListHeader>
            <Row>
              <Column small="full" medium="one-half" large="one-half" classes="event-list__results">
                <Styles.ResultsCount>
                  {totalResults} event{(totalResults > 1 || totalResults === 0) && 's'}
                </Styles.ResultsCount>
              </Column>
              <Column small="full" medium="one-half" large="one-half">
                <Styles.SortCol>
                  <DropDownSelect label="Sort by" options={sortByOptions} onChange={setSortBy} />
                </Styles.SortCol>
              </Column>
            </Row>
          </Styles.EventListHeader>

          {results && results.length > 0 ? (
            <Row isList>
              {results.map((result) => (
                <Column isList small="full" medium="full" large="full" key={result.id}>
                  <EventLink
                    {...result}
                    showSummary
                    summary={result.summary ? transformSnippet(result.summary, 50) : ''}
                  />
                </Column>
              ))}
              <Column small="full" medium="full" large="full">
                <Pagination currentPage={pageNumber} totalResults={totalResults} postTo="/" resultsPerPage={5} />
              </Column>
            </Row>
          ) : (
            <Styles.ResultInfo>No results found</Styles.ResultInfo>
          )}
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default EventList;
