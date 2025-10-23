import React, { useState } from 'react';
import { ConsultationListProps } from './ConsultationList.types';
import * as Styles from './ConsultationList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Heading from '../../components/Heading/Heading';
import { DropDownSelectOptionsProps } from '../../components/DropDownSelect/DropDownSelect.types';
import Input from '../../components/Input/Input';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import FormButton from '../../components/FormButton/FormButton';
import ConsultationLink from '../../components/ConsultationLink/ConsultationLink';
import Pagination from '../../components/Pagination/Pagination';

const ConsultationList: React.FunctionComponent<ConsultationListProps> = ({
  results,
  pageNumber = 1,
  sortBy = 'asc',
  setSortBy,
  totalResults = 0,
  consultationSearch,
  setConsultationSearch,
  services,
  service,
  setService,
  activityTypes,
  activityType,
  setActivityType,
  status,
  setStatus,
  onSubmit,
  clearFilters,
  consultationsPagePath,
}) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
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

  const statusOptions: DropDownSelectOptionsProps[] = [
    {
      title: 'Any status',
      value: '',
    },
    {
      title: 'Open',
      value: 'open',
    },
    {
      title: 'Closed',
      value: 'closed',
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Styles.Container data-testid="ConsultationList">
      <Row>
        <Column small="full" medium="one-third" large="one-third">
          <Styles.ToggleFilters onClick={() => setShowFilters(!showFilters)}>
            <span>{showFilters ? 'Hide' : 'Show'} search and filters</span>
          </Styles.ToggleFilters>
          <Styles.FilterContainer $showFilters={showFilters}>
            <Heading level={2} text="Search and filters" />

            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="consultationSearch">Search</label>
              <Input
                name="consultationSearch"
                id="consultationSearch"
                type="text"
                isFullWidth
                value={consultationSearch}
                onChange={(e) => setConsultationSearch(e.target.value)}
              />
              {activityTypes && (
                <Styles.SelectContainer>
                  <DropDownSelect
                    label="Activity type"
                    id="activityType"
                    options={activityTypes ? activityTypes : [{ title: 'All activity types', value: 'all' }]}
                    onChange={(e) => setActivityType(e.target.value)}
                    value={activityType}
                    isFullWidth
                  />
                </Styles.SelectContainer>
              )}
              {services && (
                <Styles.SelectContainer>
                  <DropDownSelect
                    label="Services"
                    id="servicesDropdown"
                    options={services ? services : [{ title: 'All services', value: 'all' }]}
                    onChange={(e) => setService(e.target.value)}
                    value={service}
                    isFullWidth
                  />
                </Styles.SelectContainer>
              )}

              <Styles.SelectContainer>
                <DropDownSelect
                  label="Status"
                  id="status"
                  options={statusOptions}
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  isFullWidth
                />
              </Styles.SelectContainer>

              <FormButton text="Search" size="large" />
            </form>
            {(consultationSearch || service || activityType || status) && (
              <Styles.ClearFilters onClick={() => clearFilters()}>Clear filters</Styles.ClearFilters>
            )}
          </Styles.FilterContainer>
        </Column>
        <Column small="full" medium="two-thirds" large="two-thirds">
          <Styles.ConsultationListHeader>
            <Row>
              <Column small="full" medium="one-half" large="one-half" classes="consultation-list__results">
                <Styles.ResultsCount>
                  {totalResults} consultation{(totalResults > 1 || totalResults === 0) && 's'}
                </Styles.ResultsCount>
              </Column>
              <Column small="full" medium="one-half" large="one-half">
                <Styles.SortCol>
                  <DropDownSelect
                    label="Sort by"
                    id="sortBy"
                    value={sortBy}
                    options={sortByOptions}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                </Styles.SortCol>
              </Column>
            </Row>
          </Styles.ConsultationListHeader>

          {results && Array.isArray(results) && results.length > 0 ? (
            <>
              <Row isList>
                {results.map((result) => (
                  <Column isList small="full" medium="full" large="full" key={result.id}>
                    <ConsultationLink {...result} showSummary={true} />
                  </Column>
                ))}
              </Row>
              <Pagination
                currentPage={pageNumber}
                totalResults={totalResults}
                postTo={consultationsPagePath}
                resultsPerPage={5}
              />
            </>
          ) : (
            <p>No results found</p>
          )}
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default ConsultationList;
