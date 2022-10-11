import React, { useEffect, useState } from 'react';
import { DirectoryServiceListProps } from './DirectoryServiceList.types';
import * as Styles from './DirectoryServiceList.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import sanitizeHtml from 'sanitize-html';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import Input from '../../components/Input/Input';
import { handleParams } from '../../helpers/url-helpers';
import SearchIcon from '../../components/icons/SearchIcon/SearchIcon';

const DirectoryServiceList: React.FC<DirectoryServiceListProps> = ({
  directoryPath,
  services,
  searchTerm = '',
  searchPostcode = '',
  totalResults = 0,
  pageNumber,
  extractLength = 140,
}) => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(searchTerm);
  const [postcode, setPostcode] = useState<string>(searchPostcode);

  useEffect(() => {
    if (!submit) return;

    handleParams(directoryPath, [
      {
        key: 'search',
        value: search,
      },
      {
        key: 'postcode',
        value: postcode,
      },
    ]);
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.search.value !== '') {
      setSearch(e.target.search.value);
    }

    if (e.target.postcode.value !== '') {
      setPostcode(e.target.postcode.value);
    }

    setSubmit(true);
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
              <Styles.Label htmlFor="search">
                What are you looking for?
                <Input name="search" type="text" defaultValue={searchTerm} />
              </Styles.Label>
              <Styles.Label htmlFor="postcode">
                Postcode
                <Input name="postcode" type="text" defaultValue={postcode} />
              </Styles.Label>
              <Styles.Button>
                <Styles.ButtonText>Search</Styles.ButtonText>
                <SearchIcon colourFill="#fff" />
              </Styles.Button>
            </FormWithLine>
          </Styles.SearchHeader>
        </Column>
        <Column small="full" medium="one-third" large="one-quarter">
          <Row>
            <Column small="full" medium="full" large="full">
              <Styles.ResultInfo>Refine your search</Styles.ResultInfo>
            </Column>
          </Row>
        </Column>
        <Column small="full" medium="two-thirds" large="three-quarters">
          <Row>
            <Column small="full" medium="full" large="full">
              <Styles.ResultInfo>
                Showing {services.length} out of {totalResults.toLocaleString()}
              </Styles.ResultInfo>
            </Column>
            {services.map((service, index) => (
              <Column small="full" medium="full" large="full" key={service.id}>
                <Styles.ServiceContainer resultNumber={index}>
                  <Row>
                    <Column small="full" medium="full" large="one-half">
                      <a href={`${directoryPath}/${service.id}`}>{service.name}</a>
                      <div>
                        {sanitizeHtml(service.description, { allowedTags: [], allowedAttributes: {} }).substr(
                          0,
                          extractLength
                        ) + String.fromCharCode(8230)}
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
