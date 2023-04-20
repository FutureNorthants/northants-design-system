import React, { useContext, useEffect, useState } from 'react';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import * as Styles from './DirectoryServiceList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import sanitizeHtml from 'sanitize-html';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import Input from '../../components/Input/Input';
import HeartIcon from '../../components/icons/HeartIcon/HeartIcon';
import PinIcon from '../../components/icons/PinIcon/PinIcon';
import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';
import HintText from '../../components/HintText/HintText';
import Pagination from '../../components/Pagination/Pagination';
import { useDirectoryShortListContext } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import DirectoryAddToShortList from '../DirectoryAddToShortList/DirectoryAddToShortList';
import useLocalStorage from '../../helpers/UseLocalStorage';
import DirectoryMap from '../DirectoryMap/DirectoryMap';
import { StaticMapProps } from '../../components/StaticMap/StaticMap.types';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { ThemeContext } from 'styled-components';

const DirectoryServiceList: React.FunctionComponent<DirectoryServiceListProps> = ({
  directoryPath,
  shortListPath,
  services,
  search = '',
  setSearch,
  postcode = '',
  setPostcode,
  totalResults = 0,
  pageNumber = 1,
  setPageNumber,
  perPage = 5,
  extractLength = 190,
  categories = [],
  setCategories,
  minimumAge = undefined,
  setMinimumAge,
  maximumAge = undefined,
  setMaximumAge,
  mapCenter = '52.23555414368587,-0.8957390701320571',
  mapZoom = 9,
  isLoading = false,
  ageInMonths = false,
}) => {
  const [accordions, setAccordions] = useLocalStorage(`${directoryPath.replace(/\//g, '')}-accordion`, []);
  const [openAll, setOpenAll] = useLocalStorage(`${directoryPath.replace(/\//g, '')}-accordion-all`, true);
  const [showMap, setShowMap] = useLocalStorage(`${directoryPath.replace(/\//g, '')}-show-map`, false);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const {
    favourites: { favourites: favourites, setFavourites: setFavourites },
    toggleFavourites: toggleFavourites,
    isFavourite: isFavourite,
  } = useDirectoryShortListContext();
  const [notServer, setNotServer] = useState(false);
  const [searchTerm, setSearchTerm] = useState(search);
  const [postcodeSearch, setPostcodeSearch] = useState(postcode);
  const themeContext = useContext(ThemeContext);
  const [filtersActive, setFiltersActive] = useState(false);

  useEffect(() => {
    setNotServer(true);
    setFiltersActive(hasActiveFilters());
  }, []);

  if (accordions.length === 0) {
    const tempAccordions = [];
    categories?.forEach(() => {
      tempAccordions.push(false);
    });
    tempAccordions.push(false);
    setAccordions(tempAccordions);
  }

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
    setFiltersActive(hasActiveFilters());
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

  const toggleAll = () => {
    setOpenAll(!openAll);

    const updatedAccordions = accordions.map(() => {
      return openAll;
    });

    setAccordions(updatedAccordions);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch(searchTerm);
    setPostcode(postcodeSearch);
  };

  const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const labelLetters: string[] = letters.split('');

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

  const formatAge = (age) => {
    if (age === 0) {
      return age;
    }
    if (ageInMonths) {
      if (age > 36) {
        return Math.ceil(age / 12) + ' years';
      }
      return `${age} months`;
    }
    return `${age} years`;
  };

  const handleAgeChange = (e, field: string) => {
    let age: number = e.target.value ? parseInt(e.target.value, 10) : undefined;
    if (ageInMonths && age) {
      age = age * 12;
    }

    if (field === 'maximumAge') {
      setMaximumAge(age);
    } else {
      setMinimumAge(age);
    }
  };

  const hasActiveFilters = () => {
    return categories.some((category) => {
      return category.options.some((option) => {
        return option.checked == true;
      });
    });
  };

  hasActiveFilters();

  return (
    <Styles.Container data-testid="DirectoryServiceList">
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
                  <Styles.Label htmlFor="postcode">Postcode</Styles.Label>
                  <HintText text="Enter a postcode" />
                  <Input
                    name="postcode"
                    type="text"
                    defaultValue={postcodeSearch}
                    id="postcode"
                    onChange={(e) => setPostcodeSearch(e.target.value)}
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
          <Styles.FilterToggle type="button" onClick={(e) => setShowFilters(!showFilters)}>
            {showFilters ? `Hide Filters` : `Show Filters`}
          </Styles.FilterToggle>
          <Styles.FilterContainer showFilters={showFilters}>
            <Row>
              <Column small="full" medium="full" large="full">
                <Styles.ResultInfo>Refine your search</Styles.ResultInfo>
              </Column>
              {notServer && (
                <>
                  <Column small="full" medium="full" large="full">
                    <Styles.AccordionControls>
                      {filtersActive ? (
                        <Styles.TextLink onClick={clearSearch} type="button">
                          <Styles.ButtonText>Clear all filters</Styles.ButtonText>
                        </Styles.TextLink>
                      ) : (
                        <div></div>
                      )}

                      <Styles.TextLink onClick={toggleAll} type="button" aria-expanded={!openAll}>
                        {openAll ? 'Open all' : 'Close all'}
                        <Styles.VisuallyHidden> sections</Styles.VisuallyHidden>
                      </Styles.TextLink>
                    </Styles.AccordionControls>
                  </Column>
                  <Column small="full" medium="full" large="full">
                    <Styles.Fieldset>
                      <Styles.Legend onClick={(e) => toggleAccordion(0)}>
                        <Styles.LegendButton onClick={(e) => toggleAccordion(0)} type="button">
                          Select age group (years)
                          <Styles.AccordionIcon isOpen={accordions[0]} />
                        </Styles.LegendButton>
                      </Styles.Legend>
                      <Styles.Accordion isOpen={accordions[0]}>
                        <Row>
                          <Column small="full" medium="one-half" large="one-half">
                            <Styles.Label htmlFor="minimum_age">From</Styles.Label>
                            <Input
                              name="minimum_age"
                              onChange={(e) => handleAgeChange(e, 'minimumAge')}
                              defaultValue={ageInMonths && minimumAge ? minimumAge / 12 : minimumAge}
                              id="minimum_age"
                              type="number"
                            />
                          </Column>
                          <Column small="full" medium="one-half" large="one-half">
                            <Styles.Label htmlFor="maximum_age">To</Styles.Label>
                            <Input
                              name="maximum_age"
                              onChange={(e) => handleAgeChange(e, 'maximumAge')}
                              defaultValue={ageInMonths && maximumAge ? maximumAge / 12 : maximumAge}
                              id="maximum_age"
                              type="number"
                            />
                          </Column>
                        </Row>
                      </Styles.Accordion>
                    </Styles.Fieldset>
                  </Column>
                  {categories?.map((category, categoryIndex) => (
                    <Column small="full" medium="full" large="full" key={category.label}>
                      <Styles.Fieldset>
                        <Styles.Legend>
                          <Styles.LegendButton onClick={(e) => toggleAccordion(categoryIndex + 1)} type="button">
                            {category.label}
                            <Styles.AccordionIcon isOpen={accordions[categoryIndex + 1]} />
                          </Styles.LegendButton>
                        </Styles.Legend>
                        <Styles.Accordion isOpen={accordions[categoryIndex + 1]}>
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
                </>
              )}
            </Row>
          </Styles.FilterContainer>
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
                  {services?.length > 0 ? (
                    <Styles.ResultInfo>
                      Showing {from} to {to} out of {totalResults.toLocaleString()}
                    </Styles.ResultInfo>
                  ) : (
                    <Styles.ResultInfo>No results found</Styles.ResultInfo>
                  )}
                  <Styles.FavouritesContainer>
                    {services?.length > 0 && (
                      <Styles.MapToggle type="button" onClick={(e) => setShowMap(!showMap)}>
                        {showMap ? `Hide Map` : `Show Map`}
                      </Styles.MapToggle>
                    )}

                    <Styles.Favourites href={shortListPath}>
                      <HeartIcon colourFill={themeContext.theme_vars.colours.action} /> Shortlist ({favourites.length})
                    </Styles.Favourites>
                  </Styles.FavouritesContainer>
                </Column>
                <Column small="full" medium="full" large="full">
                  {notServer && <>{services?.length > 0 && showMap && <DirectoryMap mapProps={mapProps} />}</>}
                </Column>
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
                                <PinIcon colourFill={themeContext.theme_vars.colours.action_dark} />
                              </Styles.MarkerContainer>
                            </Styles.ServiceHeader>

                            <div>{snippet}</div>
                            {service.eligibilitys && (
                              <>
                                {service.eligibilitys.map((eligibility) => (
                                  <Styles.Age key={eligibility.id}>
                                    Suitable for ages from {formatAge(eligibility.minimum_age)} to{' '}
                                    {formatAge(eligibility.maximum_age)}
                                  </Styles.Age>
                                ))}
                              </>
                            )}
                          </Column>
                          <Column small="full" medium="full" large="full">
                            <DirectoryAddToShortList
                              id={service.id}
                              name={service.name}
                              snippet={snippet}
                              email={service.email}
                              website={service.url}
                              phone={service.contacts?.[0]?.phones?.flatMap((phone) => phone.number).join(', ')}
                            />
                          </Column>
                        </Row>
                      </Styles.ServiceContainer>
                    </Column>
                  );
                })}
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

export default DirectoryServiceList;
