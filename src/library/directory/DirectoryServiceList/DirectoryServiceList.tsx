import React, { useEffect, useState, MouseEvent } from 'react';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import * as Styles from './DirectoryServiceList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import sanitizeHtml from 'sanitize-html';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import Input from '../../components/Input/Input';
import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';
import CloseIcon from '../../components/icons/CloseIcon/CloseIcon';
import HintText from '../../components/HintText/HintText';
import Pagination from '../../components/Pagination/Pagination';

const DirectoryServiceList: React.FunctionComponent<DirectoryServiceListProps> = ({
  directoryPath,
  services,
  searchTerm = '',
  searchPostcode = '',
  totalResults = 0,
  pageNumber = 1,
  perPage = 5,
  extractLength = 190,
  categories = [],
  searchMinimumAge = '',
  searchMaximumAge = '',
}) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchTerm);
  const [postcode, setPostcode] = useState<string>(searchPostcode);
  const [checkboxState, setCheckboxState] = useState(categories);
  const [minimumAge, setMinimumAge] = useState(searchMinimumAge);
  const [maximumAge, setMaximumAge] = useState(searchMaximumAge);
  const [accordions, setAccordions] = useState([]);

  categories?.forEach((category) => {
    accordions.push(false);
  });
  accordions.push(false);

  useEffect(() => {
    if (!submit) return;

    let params = [];

    if (search !== '') {
      params.push({
        key: 'search',
        value: search,
      });
    }

    if (postcode !== '') {
      params.push({
        key: 'postcode',
        value: postcode,
      });
    }

    if (minimumAge && typeof minimumAge === 'number') {
      params.push({
        key: 'minimum_age',
        value: minimumAge,
      });
    }

    if (maximumAge && typeof maximumAge === 'number') {
      params.push({
        key: 'maximum_age',
        value: maximumAge,
      });
    }

    checkboxState?.forEach((category) => {
      category.options.forEach((taxonomy) => {
        if (taxonomy.checked) {
          params.push({
            key: 'taxonomy_id',
            value: taxonomy.id,
          });
        }
      });
    });

    setSubmit(false);

    const query = params
      .map((param) => {
        return `${param.key}=${param.value}`;
      })
      .join('&');

    window.location.href = directoryPath + '?' + query;
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.directorySearch.value);
    setPostcode(e.target.postcode.value);
    setSubmit(true);
  };

  const optionChecked = (e, categoryIndex: number, singleSelection: boolean) => {
    let newCheckboxState = [...checkboxState];

    if (singleSelection) {
      newCheckboxState[categoryIndex].options.forEach((option) => {
        option.checked = false;
      });
    }

    newCheckboxState[categoryIndex].options.find((option) => {
      if (option.id === e.target.value) {
        option.checked = !option.checked;
      }
    });

    setCheckboxState(newCheckboxState);
  };

  const from = pageNumber * perPage - (perPage - 1);
  const to = from + (services?.length ? services.length - 1 : 0);

  const clearSearch = () => {
    window.location.href = directoryPath;
  };

  const toggleAccordion = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index] = !updatedAccordions[index];

    setAccordions(updatedAccordions);
  };

  return (
    <Styles.Container data-testid="DirectoryServiceList">
      <Row>
        <Column small="full" medium="full" large="full">
          <Styles.SearchHeader>
            <FormWithLine
              hideLine
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Row>
                <Column small="full" medium="one-half" large="one-third">
                  <Styles.Label htmlFor="directorySearch">What are you looking for?</Styles.Label>
                  <HintText text="Enter a search word or phrase" />
                  <Input
                    name="directorySearch"
                    type="text"
                    defaultValue={searchTerm}
                    placeholder="Enter a search term"
                  />
                </Column>
                <Column small="full" medium="one-half" large="one-third">
                  <Styles.Label htmlFor="postcode">Postcode</Styles.Label>
                  <HintText text="Enter a postcode" />
                  <Input name="postcode" type="text" defaultValue={postcode} placeholder="Enter a postcode" />
                </Column>
                <Column small="full" medium="one-half" large="one-third">
                  <Styles.ButtonContainer>
                    <Styles.Button>
                      <Styles.ButtonText>Search</Styles.ButtonText>
                      <SearchIcon colourFill="#fff" />
                    </Styles.Button>
                    <Styles.Button onClick={clearSearch} type="button">
                      <Styles.ButtonText>Clear</Styles.ButtonText>
                      <CloseIcon colourFill="#fff" />
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
            {checkboxState?.map((category, categoryIndex) => (
              <Column small="full" medium="full" large="full" key={category.label}>
                <Styles.Fieldset>
                  <Styles.Legend>
                    <Styles.LegendButton onClick={(e) => toggleAccordion(categoryIndex)} type="button">
                      {category.label}
                      <Styles.AccordionIcon isOpen={accordions[categoryIndex]} />
                    </Styles.LegendButton>
                  </Styles.Legend>
                  <Styles.Accordion isOpen={accordions[categoryIndex]}>
                    {category.options.map((taxonomy) => (
                      <Styles.Category key={taxonomy.id}>
                        <Styles.CategoryInput
                          type={category.singleSelection ? 'radio' : 'checkbox'}
                          value={taxonomy.id}
                          id={taxonomy.id.replace(' ', '')}
                          name={taxonomy.vocabulary}
                          onChange={(e) => optionChecked(e, categoryIndex, category.singleSelection)}
                          checked={taxonomy.checked}
                        />
                        <Styles.CategoryInputLabel
                          isChecked={taxonomy.checked}
                          htmlFor={taxonomy.id.replace(' ', '')}
                          singleSelection={category.singleSelection}
                        >
                          {taxonomy.name}
                        </Styles.CategoryInputLabel>
                      </Styles.Category>
                    ))}
                  </Styles.Accordion>
                </Styles.Fieldset>
              </Column>
            ))}
            <Column small="full" medium="full" large="full">
              <Styles.Fieldset>
                <Styles.Legend onClick={(e) => toggleAccordion(checkboxState.length)}>
                  <Styles.LegendButton onClick={(e) => toggleAccordion(checkboxState.length)} type="button">
                    Select age group (years)
                    <Styles.AccordionIcon isOpen={accordions[checkboxState.length]} />
                  </Styles.LegendButton>
                </Styles.Legend>
                <Styles.Accordion isOpen={accordions[checkboxState.length]}>
                  <Row>
                    <Column small="full" medium="one-half" large="one-half">
                      <Styles.Label htmlFor="minimum_age">From</Styles.Label>
                      <Input
                        name="minimum_age"
                        onChange={(e) => setMinimumAge(parseInt(e.target.value) ?? '')}
                        defaultValue={minimumAge}
                      />
                    </Column>
                    <Column small="full" medium="one-half" large="one-half">
                      <Styles.Label htmlFor="maximum_age">To</Styles.Label>
                      <Input
                        name="maximum_age"
                        onChange={(e) => setMaximumAge(parseInt(e.target.value) ?? '')}
                        defaultValue={maximumAge}
                      />
                    </Column>
                  </Row>
                </Styles.Accordion>
              </Styles.Fieldset>
            </Column>
          </Row>
        </Column>
        <Column small="full" medium="two-thirds" large="two-thirds">
          <Row>
            <Column small="full" medium="full" large="full">
              {services?.length > 0 ? (
                <Styles.ResultInfo>
                  Showing {from} to {to} out of {totalResults.toLocaleString()}
                </Styles.ResultInfo>
              ) : (
                <Styles.ResultInfo>No results found</Styles.ResultInfo>
              )}
            </Column>

            {services.map((service, index) => (
              <Column small="full" medium="full" large="full" key={service.id}>
                <Styles.ServiceContainer resultNumber={index}>
                  <Row>
                    <Column small="full" medium="full" large="full">
                      <Styles.ServiceLink href={`${directoryPath}/${service.id}`}>{service.name}</Styles.ServiceLink>
                      <div>
                        {sanitizeHtml(service.description, {
                          allowedTags: [],
                          allowedAttributes: {},
                        }).substr(0, extractLength) + String.fromCharCode(8230)}
                      </div>
                      {service.eligibilities && (
                        <>
                          {service.eligibilities.map((eligibility) => (
                            <Styles.Age>
                              Suitable for ages from {eligibility.minimum_age} to {eligibility.maximum_age}
                            </Styles.Age>
                          ))}
                        </>
                      )}
                    </Column>
                    <Column small="full" medium="full" large="full">
                      <Styles.AddToShortlist>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          width="15px"
                          height="15px"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        Add to shortlist
                      </Styles.AddToShortlist>
                    </Column>
                  </Row>
                </Styles.ServiceContainer>
              </Column>
            ))}
            <Column small="full" medium="full" large="full">
              <Pagination
                currentPage={pageNumber}
                totalResults={totalResults}
                resultsPerPage={perPage}
                postTo={directoryPath}
              />
            </Column>
          </Row>
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryServiceList;
