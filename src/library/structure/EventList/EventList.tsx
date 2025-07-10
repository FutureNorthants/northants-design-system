import React, { useState } from 'react';
import { EventListProps } from './EventList.types';
import * as Styles from './EventList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';
import Input from '../../components/Input/Input';
import Pagination from '../../components/Pagination/Pagination';
import EventLink from '../../components/EventLink/EventLink';
import { transformSnippet } from '../../directory/DirectoryService/DirectoryServiceTransform';
import Heading from '../../components/Heading/Heading';
import FormButton from '../../components/FormButton/FormButton';
import Card from '../../components/Card/Card';
import CheckboxListFilter from '../../components/CheckboxListFilter/CheckboxListFilter';

const EventList: React.FunctionComponent<EventListProps> = ({
  results,
  pageNumber = 1,
  sortBy,
  setSortBy,
  totalResults = 0,
  services,
  eventTypes,
  eventSearch = '',
  setEventSearch,
  service = '',
  setService,
  eventType = [''],
  setEventType,
  startDate = '',
  setStartDate,
  endDate = '',
  setEndDate,
  onSubmit,
  clearFilters,
  eventsPagePath = '/events',
  cards,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const sortByOptions: DropDownSelectOptionsProps[] = [
    {
      title: 'Latest date',
      value: 'desc',
    },
    {
      title: 'Earliest date',
      value: 'asc',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Styles.Container data-testid="EventList">
      <Row>
        <Column small="full" medium="one-third" large="one-third">
          <Styles.ToggleFilters onClick={() => setShowFilters(!showFilters)}>
            <span>{showFilters ? 'Hide' : 'Show'} search and filters</span>
          </Styles.ToggleFilters>
          <Styles.FilterContainer $showFilters={showFilters}>
            <Heading level={2} text="Search and filters" />

            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="eventSearch">Search</label>
              <Input
                name="eventSearch"
                id="eventSearch"
                type="text"
                isFullWidth
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
              />
              <Styles.SelectContainer>
                <DropDownSelect
                  label="Services"
                  options={services ? services : [{ title: 'All services', value: 'all' }]}
                  onChange={(e) => setService(e.target.value)}
                  value={service}
                  isFullWidth
                />
              </Styles.SelectContainer>

              <label htmlFor="startDate">Start Date</label>
              <Input
                name="startDate"
                id="startDate"
                type="date"
                isFullWidth
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  e.target.value > endDate && setEndDate('');
                }}
              />

              <label htmlFor="endDate">End Date</label>
              <Input
                name="endDate"
                id="endDate"
                type="date"
                isFullWidth
                minValue={startDate}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />

              {eventTypes && (
                <Styles.SelectContainer>
                  <CheckboxListFilter
                    label="This event is for"
                    hint={null}
                    options={eventTypes}
                    checked={eventType}
                    displayLegend={true}
                    onChange={setEventType}
                  />
                </Styles.SelectContainer>
              )}
              <FormButton text="Search" size="large" />
            </form>
            {(eventSearch || startDate || endDate || service) && (
              <Styles.ClearFilters onClick={() => clearFilters()}>Clear filters</Styles.ClearFilters>
            )}
          </Styles.FilterContainer>
          {cards && (
            <Row>
              <Column small="full" medium="full" large="full">
                <Heading text="Other events" level={2} />
              </Column>
              {cards?.map((card, index) => (
                <Column small="full" medium="full" large="full" key={index}>
                  <Card {...card} />
                </Column>
              ))}
            </Row>
          )}
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
                  <DropDownSelect
                    label="Sort by"
                    value={sortBy}
                    options={sortByOptions}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                </Styles.SortCol>
              </Column>
            </Row>
          </Styles.EventListHeader>

          {results && Array.isArray(results) && results.length > 0 ? (
            <>
              <Row isList>
                {results.map((result) => (
                  <Column isList small="full" medium="full" large="full" key={result.id}>
                    <EventLink
                      {...result}
                      showSummary
                      summary={result.summary ? transformSnippet(result.summary, 50) : ''}
                      parentTitle={result.parentTitle}
                    />
                  </Column>
                ))}
              </Row>
              <Pagination
                currentPage={pageNumber}
                totalResults={totalResults}
                postTo={eventsPagePath}
                resultsPerPage={5}
              />
            </>
          ) : (
            <Styles.ResultInfo>No results found</Styles.ResultInfo>
          )}
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default EventList;
