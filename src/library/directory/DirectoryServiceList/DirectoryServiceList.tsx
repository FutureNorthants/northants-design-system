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
}) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchTerm);
  const [postcode, setPostcode] = useState<string>(searchPostcode);
  const [checkboxState, setCheckboxState] = useState(categories);

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

  const optionChecked = (e, categoryIndex) => {
    let newCheckboxState = [...checkboxState];

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
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Styles.Label htmlFor="directorySearch">
                What are you looking for?
                <Input name="directorySearch" type="text" defaultValue={searchTerm} placeholder="Enter a search term" />
              </Styles.Label>
              <Styles.Label htmlFor="postcode">
                Postcode
                <Input name="postcode" type="text" defaultValue={postcode} placeholder="Enter a postcode" />
              </Styles.Label>
              <Styles.ButtonContainer>
                <Styles.Button>
                  <Styles.ButtonText>Search</Styles.ButtonText>
                  <SearchIcon colourFill="#fff" />
                </Styles.Button>
                <Styles.Button onClick={clearSearch}>
                  <Styles.ButtonText>Clear</Styles.ButtonText>
                  <CloseIcon colourFill="#fff" />
                </Styles.Button>
              </Styles.ButtonContainer>
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
                    <Styles.Checkbox key={taxonomy.id}>
                      <Styles.CheckboxInput
                        type="checkbox"
                        value={taxonomy.id}
                        id={taxonomy.name.replace(' ', '')}
                        name={taxonomy.vocabulary}
                        onChange={(e) => optionChecked(e, categoryIndex)}
                        checked={taxonomy.checked}
                      />
                      <Styles.CheckboxLabel isChecked={taxonomy.checked} htmlFor={taxonomy.name.replace(' ', '')}>
                        {taxonomy.name}
                      </Styles.CheckboxLabel>
                    </Styles.Checkbox>
                  ))}
                </Styles.Fieldset>
              </Column>
            ))}
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
                            {service.service_at_locations[0].physical_addresses[0].address_1},{' '}
                            {service.service_at_locations[0].physical_addresses[0].city},{' '}
                            {service.service_at_locations[0].physical_addresses[0].state_province},{' '}
                            {service.service_at_locations[0].physical_addresses[0].postal_code}
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
