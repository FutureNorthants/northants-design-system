import React, { useEffect, useState } from 'react';
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
import { useDirectoryShortListContext } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import DirectoryAddToShortList from '../DirectoryAddToShortList/DirectoryAddToShortList';
import useLocalStorage from '../../helpers/UseLocalStorage';
import DirectoryMap from '../DirectoryMap/DirectoryMap';
import { StaticMapProps } from '../../components/StaticMap/StaticMap.types';

const DirectoryServiceList: React.FunctionComponent<DirectoryServiceListProps> = ({
  directoryPath,
  shortListPath,
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
  customTaxonomyFilters = [],
  mapCenter = '52.23555414368587,-0.8957390701320571',
  mapZoom = 9,
}) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchTerm);
  const [postcode, setPostcode] = useState<string>(searchPostcode);
  const [checkboxState, setCheckboxState] = useState(categories);
  const [minimumAge, setMinimumAge] = useState(searchMinimumAge);
  const [maximumAge, setMaximumAge] = useState(searchMaximumAge);
  const [accordions, setAccordions] = useLocalStorage(`${directoryPath.replace(/\//g, '')}-accordion`, []);
  const {
    favourites: { favourites: favourites, setFavourites: setFavourites },
    toggleFavourites: toggleFavourites,
    isFavourite: isFavourite,
  } = useDirectoryShortListContext();

  if (accordions.length === 0) {
    const tempAccordions = [];
    categories?.forEach(() => {
      tempAccordions.push(false);
    });
    tempAccordions.push(false);
    setAccordions(tempAccordions);
  }

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
      if (customTaxonomyFilters.includes(category.vocabulary)) {
        category.options.forEach((taxonomy) => {
          if (taxonomy.checked) {
            params.push({
              key: category.vocabulary,
              value: taxonomy.id,
            });
          }
        });
      } else {
        category.options.forEach((taxonomy) => {
          if (taxonomy.checked) {
            params.push({
              key: 'taxonomy_id',
              value: taxonomy.id,
            });
          }
        });
      }
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

    setSubmit(true);
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

  const notServer = typeof window !== 'undefined';

  const labelLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  const mapProps: StaticMapProps = {
    centre: mapCenter,
    zoom: mapZoom,
    size: '640x320',
    imageAltText: 'Directory search results displayed on a map',
    mapMarkers: services.map((service, index) => {
      return {
        lat: parseFloat(service.service_at_locations[0]?.latitude),
        lng: parseFloat(service.service_at_locations[0]?.longitude),
        label: labelLetters[index],
        title: `<a href="${directoryPath}/${service.id}">${service.name}</a>`,
      };
    }),
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
                    id="directorySearch"
                  />
                </Column>
                <Column small="full" medium="one-half" large="one-third">
                  <Styles.Label htmlFor="postcode">Postcode</Styles.Label>
                  <HintText text="Enter a postcode" />
                  <Input
                    name="postcode"
                    type="text"
                    defaultValue={postcode}
                    placeholder="Enter a postcode"
                    id="postcode"
                  />
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
            {notServer && (
              <>
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
                            id="minimum_age"
                          />
                        </Column>
                        <Column small="full" medium="one-half" large="one-half">
                          <Styles.Label htmlFor="maximum_age">To</Styles.Label>
                          <Input
                            name="maximum_age"
                            onChange={(e) => setMaximumAge(parseInt(e.target.value) ?? '')}
                            defaultValue={maximumAge}
                            id="maximum_age"
                          />
                        </Column>
                        <Column small="full" medium="full" large="full">
                          <Styles.Button onClick={(e) => setSubmit(true)}>
                            <Styles.ButtonText>Search</Styles.ButtonText>
                            <SearchIcon colourFill="#fff" />
                          </Styles.Button>
                        </Column>
                      </Row>
                    </Styles.Accordion>
                  </Styles.Fieldset>
                </Column>
              </>
            )}
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
              <Styles.Favourites href={shortListPath}>
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
                </svg>{' '}
                Shortlist ({favourites.length})
              </Styles.Favourites>
            </Column>

            {services?.length > 0 && (
              <Column small="full" medium="full" large="full">
                <DirectoryMap mapProps={mapProps} />
              </Column>
            )}

            {services.map((service, index) => {
              const snippet =
                sanitizeHtml(service.description, {
                  allowedTags: [],
                  allowedAttributes: {},
                }).substr(0, extractLength) + String.fromCharCode(8230);
              return (
                <Column small="full" medium="full" large="full" key={service.id}>
                  <Styles.ServiceContainer resultNumber={index}>
                    <Row>
                      <Column small="full" medium="full" large="full">
                        <Styles.ServiceHeader>
                          <Styles.ServiceLink href={`${directoryPath}/${service.id}`}>
                            {service.name}
                          </Styles.ServiceLink>
                          <Styles.MarkerContainer>
                            <span>{labelLetters[index]}</span>

                            <svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              viewBox="0 0 42.4 59.1"
                              stroke="currentColor"
                            >
                              <path
                                d="M19.7,5.6c-0.1,0-0.5,0.1-0.9,0.1c-3.3,0.4-6.5,2-8.9,4.4c-2.6,2.6-4.2,5.9-4.6,9.6c-0.1,1,0,3.1,0.1,4.1c0.3,2.1,1.1,4.2,2.3,6.6c0.9,1.6,1.6,2.9,4.2,7c0.9,1.4,1.9,3.1,2.6,4.2c2.3,3.9,4.1,7.9,5.4,11.9c0.2,0.6,0.3,0.8,0.6,0.9c0.5,0.2,1.1,0.1,1.4-0.3c0.1-0.1,0.2-0.5,0.4-0.9c1.1-3.3,2.5-6.5,4.2-9.5c1.2-2.2,2-3.6,4.4-7.4c1.7-2.7,2.3-3.6,2.9-4.8c1.6-2.9,2.5-5.3,2.9-7.8c0.2-1,0.2-3.1,0.1-4.1c-0.2-1.5-0.5-3-1-4.2c-2.1-5.2-6.8-8.9-12.4-9.8C22.9,5.6,20.2,5.5,19.7,5.6z"
                                fill="currentColor"
                              />
                            </svg>
                          </Styles.MarkerContainer>
                        </Styles.ServiceHeader>

                        <div>{snippet}</div>
                        {service.eligibilitys && (
                          <>
                            {service.eligibilitys.map((eligibility) => (
                              <Styles.Age key={eligibility.id}>
                                Suitable for ages from {eligibility.minimum_age} to {eligibility.maximum_age}
                              </Styles.Age>
                            ))}
                          </>
                        )}
                      </Column>
                      <Column small="full" medium="full" large="full">
                        <DirectoryAddToShortList id={service.id} name={service.name} snippet={snippet} />
                      </Column>
                    </Row>
                  </Styles.ServiceContainer>
                </Column>
              );
            })}
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
