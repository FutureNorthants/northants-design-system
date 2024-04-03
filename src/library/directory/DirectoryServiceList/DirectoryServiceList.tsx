import React, { useContext, useEffect, useState } from 'react';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import * as Styles from './DirectoryServiceList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
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
import { transformSnippet, transformAge } from '../DirectoryService/DirectoryServiceTransform';
import RadioCheckboxInput from '../../components/RadioCheckboxInput/RadioCheckboxInput';
import Button from '../../components/Button/Button';
import { AlertBannerService } from '../../structure/PageStructures';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';

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
  extractLength = 300,
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
  hasDocuments = false,
  isError = false,
  proximity = 2,
  setProximity,
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
  const [proximitySearch, setProximitySearch] = useState(proximity);
  const themeContext = useContext(ThemeContext);
  const [filtersActive, setFiltersActive] = useState(false);

  useEffect(() => {
    setNotServer(true);
    setFiltersActive(hasActiveFilters());
  }, []);

  useEffect(() => {
    setFiltersActive(hasActiveFilters());
  }, [minimumAge, maximumAge, categories, search, postcode]);

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

  const clearAges = (e) => {
    e.target.value = '';

    handleAgeChange(e, 'minimumAge');
    handleAgeChange(e, 'maximumAge');
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
    setProximity(proximitySearch);
  };

  const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const labelLetters: string[] = letters.split('');

  const mapProps: StaticMapProps = {
    centre: mapCenter,
    zoom: mapZoom,
    size: '640x320',
    imageAltText: 'Directory search results displayed on a map',
    mapMarkers: services
      .filter((service) => {
        return service.service_at_locations[0]?.is_visitable != false;
      })
      .map((service, index) => {
        return {
          lat: parseFloat(service.service_at_locations[0]?.latitude),
          lng: parseFloat(service.service_at_locations[0]?.longitude),
          label: labelLetters[index],
          title: `<a href="${directoryPath}/${service.id}">${service.name}</a>`,
        };
      }),
  };

  const handleAgeChange = (e, field: string) => {
    let age: number | string = e.target.value ? parseInt(e.target.value, 10) : '';
    if (typeof age === 'number' && ageInMonths) {
      age = age * 12;
    }

    if (field === 'maximumAge') {
      setMaximumAge(age);
    } else {
      setMinimumAge(age);
    }
  };

  const hasActiveFilters = () => {
    return (
      search !== '' ||
      postcode !== '' ||
      maximumAge !== '' ||
      minimumAge !== '' ||
      categories.some((category) => {
        return category.options.some((option) => {
          return option.checked == true;
        });
      })
    );
  };

  return (
    <Styles.Container data-testid="DirectoryServiceList">
      <Row>
        <Column small="full" medium="full" large="full">
          <Styles.SearchHeader>
            <FormWithLine hideLine onSubmit={submitSearch}>
              <Row>
                <Column small="full" medium="two-thirds" large="two-thirds">
                  <Styles.Label htmlFor="directorySearch">What are you looking for?</Styles.Label>
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
                <Column small="full" medium="one-third" large="one-third">
                  <Styles.ButtonContainer>
                    <Styles.Button onClick={submitSearch} type="submit">
                      <Styles.ButtonText>Search</Styles.ButtonText>
                      <SearchIcon colourFill="#fff" />
                    </Styles.Button>

                    {filtersActive && (
                      <Styles.Button onClick={clearSearch} type="button" $isWarning={true}>
                        <Styles.ButtonText>Clear search</Styles.ButtonText>
                      </Styles.Button>
                    )}
                  </Styles.ButtonContainer>
                </Column>
                {hasDocuments && (
                  <Column small="full" medium="full" large="full">
                    <Button
                      url={`${directoryPath}/documents?search=${searchTerm}`}
                      text="View documents and resources"
                      primary={false}
                    />
                  </Column>
                )}
              </Row>
            </FormWithLine>
          </Styles.SearchHeader>
        </Column>
        <Column small="full" medium="one-third" large="one-third">
          <Styles.FilterToggle type="button" onClick={(e) => setShowFilters(!showFilters)}>
            {showFilters ? `Hide Filters` : `Show Filters`}
          </Styles.FilterToggle>
          <Styles.FilterContainer $showFilters={showFilters}>
            <Row>
              <Column small="full" medium="full" large="full">
                <Styles.ResultInfo>Refine your search</Styles.ResultInfo>
              </Column>
              {notServer && (
                <>
                  <Column small="full" medium="full" large="full">
                    <Styles.AccordionControls>
                      <div></div>
                      <Styles.TextLink onClick={toggleAll} type="button" aria-expanded={!openAll}>
                        {openAll ? 'Open all' : 'Close all'}
                        <Styles.VisuallyHidden> sections</Styles.VisuallyHidden>
                      </Styles.TextLink>
                    </Styles.AccordionControls>
                  </Column>
                  <Column small="full" medium="full" large="full">
                    <Styles.Fieldset>
                      <Styles.Legend>
                        <Styles.LegendButton onClick={(e) => toggleAccordion(0)} type="button">
                          Near me
                          <Styles.AccordionIcon $isOpen={accordions[0]} />
                        </Styles.LegendButton>
                      </Styles.Legend>
                      <Styles.Accordion $isOpen={accordions[0]}>
                        <Row>
                          <Column small="full" medium="full" large="full">
                            <Styles.Label htmlFor="postcode">Postcode</Styles.Label>
                            <Input
                              name="postcode"
                              type="text"
                              defaultValue={postcodeSearch}
                              id="postcode"
                              onChange={(e) => setPostcodeSearch(e.target.value)}
                            />
                          </Column>
                          <Column small="full" medium="full" large="full">
                            <DropDownSelect
                              id="proximity"
                              label="Distance"
                              options={[
                                { title: '2 miles', value: '2' },
                                { title: '5 miles', value: '5' },
                                { title: '10 miles', value: '10' },
                                { title: '20+ miles', value: '50' },
                              ]}
                              boldLabel={true}
                              onChange={(e) => setProximitySearch(e.target.value)}
                            />
                          </Column>
                          <Column small="full" medium="full" large="full">
                            <Styles.Button onClick={submitSearch} type="submit">
                              <Styles.ButtonText>Search</Styles.ButtonText>
                              <SearchIcon colourFill="#fff" />
                            </Styles.Button>
                          </Column>
                        </Row>
                      </Styles.Accordion>
                    </Styles.Fieldset>
                  </Column>
                  <Column small="full" medium="full" large="full">
                    <Styles.Fieldset>
                      <Styles.Legend>
                        <Styles.LegendButton onClick={(e) => toggleAccordion(1)} type="button">
                          Select age group (years)
                          <Styles.AccordionIcon $isOpen={accordions[1]} />
                        </Styles.LegendButton>
                      </Styles.Legend>
                      <Styles.Accordion $isOpen={accordions[1]}>
                        <Styles.ClearFilter>
                          <Styles.TextLink onClick={(e) => clearAges(e)}>Clear filter</Styles.TextLink>
                        </Styles.ClearFilter>
                        <Row>
                          <Column small="full" medium="one-half" large="one-half">
                            <Styles.Label htmlFor="minimum_age">From</Styles.Label>
                            <Input
                              name="minimum_age"
                              onChange={(e) => handleAgeChange(e, 'minimumAge')}
                              value={ageInMonths && typeof minimumAge === 'number' ? minimumAge / 12 : minimumAge}
                              id="minimum_age"
                              type="number"
                            />
                          </Column>
                          <Column small="full" medium="one-half" large="one-half">
                            <Styles.Label htmlFor="maximum_age">To</Styles.Label>
                            <Input
                              name="maximum_age"
                              onChange={(e) => handleAgeChange(e, 'maximumAge')}
                              value={ageInMonths && typeof maximumAge === 'number' ? maximumAge / 12 : maximumAge}
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
                          <Styles.LegendButton onClick={(e) => toggleAccordion(categoryIndex + 2)} type="button">
                            {category.label}
                            <Styles.AccordionIcon $isOpen={accordions[categoryIndex + 2]} />
                          </Styles.LegendButton>
                        </Styles.Legend>
                        <Styles.Accordion $isOpen={accordions[categoryIndex + 2]}>
                          <Styles.ClearFilter>
                            <Styles.TextLink onClick={(e) => clearCategory(categoryIndex)}>
                              Clear filter
                            </Styles.TextLink>
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
                  const snippet = transformSnippet(service.description, extractLength);
                  return (
                    <Column small="full" medium="full" large="full" key={service.id}>
                      <Styles.ServiceContainer $resultNumber={index}>
                        <Row>
                          <Column small="full" medium="full" large="full">
                            <Styles.ServiceHeader>
                              <Styles.ServiceLink href={`${directoryPath}/${service.id}`}>
                                {service.name}
                              </Styles.ServiceLink>
                              {showMap && (
                                <Styles.MarkerContainer>
                                  <span>{labelLetters[index]}</span>
                                  <PinIcon colourFill={themeContext.theme_vars.colours.action_dark} />
                                </Styles.MarkerContainer>
                              )}
                            </Styles.ServiceHeader>
                          </Column>
                          <Column
                            small="full"
                            medium={service.organization?.logo ? 'two-thirds' : 'full'}
                            large={service.organization?.logo ? 'two-thirds' : 'full'}
                          >
                            <div>{snippet}</div>
                          </Column>
                          {service.organization?.logo && (
                            <Column small="full" medium="one-third" large="one-third">
                              <Styles.ServiceImageContainer>
                                <Styles.ServiceImage
                                  src={service.organization.logo}
                                  alt={service.name + ' logo'}
                                  loading="lazy"
                                />
                              </Styles.ServiceImageContainer>
                            </Column>
                          )}
                          <Column small="full" medium="full" large="full">
                            {service.eligibilitys && (
                              <>
                                {service.eligibilitys.map((eligibility) => (
                                  <Styles.Age key={eligibility.id}>
                                    Suitable for ages from {transformAge(eligibility.minimum_age, ageInMonths)} to{' '}
                                    {transformAge(eligibility.maximum_age, ageInMonths)}
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
                              addresses={service.service_at_locations?.flatMap((location) => {
                                return location.physical_addresses;
                              })}
                              fees={service.fees}
                            />
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
                    buttonClickOverride={setPageNumber}
                  />
                </Column>
              </>
            )}
          </Row>
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryServiceList;
