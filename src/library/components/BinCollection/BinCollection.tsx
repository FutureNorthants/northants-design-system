import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import axios from 'axios';
import { BinCollectionProps, AddressOption } from './BinCollection.types';
import * as Styles from './BinCollection.styles';
import FormWithLine from '../FormWithLine/FormWithLine';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import DropDownSelect from '../DropDownSelect/DropDownSelect';

/**
 * Returns the Bin Collection Checker form component to conduct search by postcode.
 */
const BinCollection: React.FunctionComponent<BinCollectionProps> = ({
  formError = false,
  baseUrl = process.env.NEXT_PUBLIC_DRUPAL_APP_API_BASE_URL,
}) => {
  const BinCollectionApiUrl = `${baseUrl}bin-collection-search/premiselist/`;
  const CalendarEventsApiUrl = `${baseUrl}bin-collection-search/calendarevents/`;
  const themeContext = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(formError);
  const [errorText, setErrorText] = useState<string>('');
  const [addressOptions, setAddressOptions] = useState<AddressOption[]>([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPostcode = e.target.elements.postcode.value;

    if (enteredPostcode === '') {
      setError(true);
      setErrorText('You need to enter a postcode');
    } else {
      setIsLoading(true);
      fetchAddresses(enteredPostcode);
    }
  };

  /**
   * Returns an array of address options based on the entered postcode.
   */
  const fetchAddresses = async (postcode) => {
    axios.get(`${BinCollectionApiUrl}${postcode}`)
      .then((response) => {
        setIsLoading(false);
        // Transform the response data into the expected format
        const transformedAddresses = response.data.data.map(item => ({
          value: item.UPRN,
          title: `${item.Address}, ${item.Locality}, ${item.Town}`
        }));

        setAddressOptions(transformedAddresses);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.error('API call error:', error);
        setErrorText('Error fetching addresses');
      });
  };

  const getFormattedDate = (daysToAdd = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toISOString().split('T')[0];
  };

  const parseDate = (dateString) => {
    const timestamp = parseInt(dateString.match(/\d+/)[0], 10);
    return new Date(timestamp);
  }

  const groupByTitle = (data) => {
    const currentDate = new Date();
    return data.reduce((acc, item) => {
      const eventDate = parseDate(item.start);
      if (eventDate >= currentDate) {
        if (!acc[item.title]) {
          acc[item.title] = [];
        }
        acc[item.title].push(eventDate);
      }
      return acc;
    }, {});
  }

  const [calendarEvents, setCalendarEvents] = useState({});

  /**
   * Returns an array of calendar events based on selected address for next 42 days.
   */
  const handleAddressChange = (e) => {
    const selectedUPRN = e.target.value;
    
    if (selectedUPRN) {
      const startDate = getFormattedDate();
      const endDate = getFormattedDate(42);
      
      // Fetch calendar events for the selected UPRN
      axios.get(`${CalendarEventsApiUrl}${selectedUPRN}/${startDate}/${endDate}`)
      .then((response) => {
        const groupedData = groupByTitle(response.data);
        setCalendarEvents(groupedData);
      })
      .catch((error) => {
        console.error('API call error:', error);
      });
    }
  };

  const resetForm = () => {
    setAddressOptions([]);
    setCalendarEvents({});
    setError(false);
    setErrorText('');
  };

  const formatTitle = (apiTitle: string) => {
    const mappings = [
        { keyword: 'Bin Refuse bin', replacement: 'Refuse bin' },
        { keyword: 'Bin Recycling', replacement: 'Recycling bin' },
        { keyword: 'Recycling Paper Box', replacement: 'Recycling Paper Box bin' },
        { keyword: 'Garden', replacement: 'Garden bin' }
    ];

    for (const mapping of mappings) {
        if (apiTitle.includes(mapping.keyword)) {
            return mapping.replacement;
        }
    }

    return apiTitle;
  };

  return (
    <Styles.Container data-testid="BinCollection">
      <FormWithLine
        onSubmit={handleSubmit}
        isError={isError}
        lineColour={themeContext.theme_vars.colours.grey_dark}
        hideLine
      >
        <Styles.FormContainer isLoading={isLoading}>
          <Styles.FormInnerContainer> 
            <Styles.Label htmlFor="postcode">
              Bin Collection Checker
              <Input
                type="text"
                placeholder="Enter a postcode"
                name="postcode"
                errorText={errorText}
                isErrored={isError}
                maxLength={10}
              />
            </Styles.Label>
            <Styles.BinCollectionButtonStyles>
              <FormButton size="large" type="submit" aria-label="Submit" text="Find" />
            </Styles.BinCollectionButtonStyles>
          </Styles.FormInnerContainer>
        </Styles.FormContainer>
      </FormWithLine>

      {addressOptions.length > 0 && (
        <Styles.DropDownSelectContainer>
          <DropDownSelect
            onChange={handleAddressChange}
            id="address"
            label="Select your address"
            options={[{ title: 'Select an address', value: '' }, ...addressOptions]}
          />
        </Styles.DropDownSelectContainer>
      )}

      <div>
        {Object.entries(calendarEvents).map(([apiTitle, dates]) => {
          const title = formatTitle(apiTitle);
          return (
            <React.Fragment key={title}>
              <Styles.UPRNPageTitleRow>
                <Styles.UPRNPageSectionTitle>{title}</Styles.UPRNPageSectionTitle>
              </Styles.UPRNPageTitleRow>
              {(dates as Date[])
                .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
                .map(date => (
                  <Styles.UPRNPageUPRNRow key={`${title}-${date.toString()}`}>
                    <Styles.UPRNPageUPRNTitle>
                      {date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </Styles.UPRNPageUPRNTitle>
                  </Styles.UPRNPageUPRNRow>
              ))}
            </React.Fragment>
          );
        })}
      </div>

      {Object.keys(calendarEvents).length > 0 && (
        <FormButton size="small" type="button" aria-label="Reset" text="Find a different address" onClick={resetForm} />
      )}

    </Styles.Container>
  );
};

export default BinCollection;
