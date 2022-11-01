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

const DirectoryServiceList: React.FunctionComponent<DirectoryServiceListProps> = ({
  directoryPath,
  services,
  searchTerm = '',
  searchPostcode = '',
  totalResults = 0,
  pageNumber = 1,
  perPage = 5,
  extractLength = 140,
  categories,
  searchMinimumAge = '',
  searchMaximumAge = '',
}) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchTerm);
  const [postcode, setPostcode] = useState<string>(searchPostcode);
  const [checkboxState, setCheckboxState] = useState(categories);
  const [minimumAge, setMinimumAge] = useState(searchMinimumAge);
  const [maximumAge, setMaximumAge] = useState(searchMaximumAge);

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
        <Column small="full" medium="one-third" large="one-quarter">
          <Row>
            <Column small="full" medium="full" large="full">
              <Styles.ResultInfo>Refine your search</Styles.ResultInfo>
            </Column>
            {categories?.map((category, categoryIndex) => (
              <Column small="full" medium="full" large="full" key={category.label}>
                <Styles.Fieldset>
                  <Styles.Legend>{category.label}</Styles.Legend>
                  {category.options.map((taxonomy) => (
                    <Styles.Category key={taxonomy.id}>
                      <Styles.CategoryInput
                        type={category.singleSelection ? 'radio' : 'checkbox'}
                        value={taxonomy.id}
                        id={taxonomy.name.replace(' ', '')}
                        name={taxonomy.vocabulary}
                        onChange={(e) => optionChecked(e, categoryIndex, category.singleSelection)}
                        checked={taxonomy.checked}
                      />
                      <Styles.CategoryInputLabel
                        isChecked={taxonomy.checked}
                        htmlFor={taxonomy.name.replace(' ', '')}
                        singleSelection={category.singleSelection}
                      >
                        {taxonomy.name}
                      </Styles.CategoryInputLabel>
                    </Styles.Category>
                  ))}
                </Styles.Fieldset>
              </Column>
            ))}
            <Column small="full" medium="full" large="full">
              <Styles.Fieldset>
                <Styles.Legend>Select age group (years)</Styles.Legend>
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
              </Styles.Fieldset>
            </Column>
          </Row>
        </Column>
        <Column small="full" medium="two-thirds" large="three-quarters">
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

            {services?.length > 0 && (
              <Column small="full" medium="full" large="full">
                <Styles.ColumnLabels>
                  <Row>
                    <Column small="full" medium="full" large="one-half">
                      Name
                    </Column>
                    <Column small="full" medium="full" large="one-quarter">
                      Address
                    </Column>
                    <Column small="full" medium="full" large="one-quarter">
                      Telephone
                    </Column>
                  </Row>
                </Styles.ColumnLabels>
              </Column>
            )}

            {services.map((service, index) => (
              <Column small="full" medium="full" large="full" key={service.id}>
                <Styles.ServiceContainer resultNumber={index}>
                  <Row>
                    <Column small="full" medium="full" large="one-half">
                      <a href={`${directoryPath}/${service.id}`}>{service.name}</a>
                      <div>
                        {sanitizeHtml(service.description, {
                          allowedTags: [],
                          allowedAttributes: {},
                        }).substr(0, extractLength) + String.fromCharCode(8230)}
                      </div>
                    </Column>
                    <Column small="full" medium="full" large="one-quarter">
                      {service.service_at_locations?.length > 0 &&
                        service.service_at_locations[0].physical_addresses?.length > 0 && (
                          <Styles.Address>
                            {Object.values(service.service_at_locations[0].physical_addresses[0])
                              .filter((key) => {
                                return key !== '';
                              })
                              .join(', ')}
                          </Styles.Address>
                        )}
                    </Column>
                    <Column small="full" medium="full" large="one-quarter">
                      {service.contacts?.length > 0 && service.contacts[0].phones?.length > 0 && (
                        <>
                          {service.contacts[0].phones.map((phone) => (
                            <p key={phone.id}>{phone.number}</p>
                          ))}
                        </>
                      )}
                    </Column>
                  </Row>
                </Styles.ServiceContainer>
              </Column>
            ))}
          </Row>
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryServiceList;
