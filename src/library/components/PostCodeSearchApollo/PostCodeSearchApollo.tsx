import React, { useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { PostCodeSearchApolloProps } from './PostCodeSearchApollo.types';
import * as Styles from './PostCodeSearchApollo.styles';
import PostcodeSearchQuery from '../../contexts/AddressSearchProvider/PostcodeSearchQuery';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { ThemeContext } from 'styled-components';
import ChevronIcon from '../icons/ChevronIcon/ChevronIcon';
import FormWithLine from '../FormWithLine/FormWithLine';
import HintText from '../HintText/HintText';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import Button from '../Button/Button';

const PostCodeSearchApollo: React.FunctionComponent<PostCodeSearchApolloProps> = ({
  title = 'Enter your postcode to find your area',
  otherCouncilLink,
}) => {
  const themeContext = useContext(ThemeContext);
  const [currentPostcode, setCurrentPostcode] = useState('');
  const [open, setOpen] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [responseData, setResponseData] = useState(null);

  const [getPostcodes, { loading, error, data }] = useLazyQuery(PostcodeSearchQuery, {
    onCompleted: (data) => {
      setResponseData(data);
    },
    onError: () => {
      setErrorText(
        'There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new postcodes.'
      );
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorText('');
    const enteredPostcode = e.target.elements.postcode.value;

    if (enteredPostcode === '') {
      setErrorText('You need to enter a postcode');
      return;
    }

    setCurrentPostcode(enteredPostcode);
    getPostcodes({ variables: { postcode: enteredPostcode.replace(/ /g, '').substring(0, 10), page: 1 } });
  };

  const clearData = () => {
    setErrorText('');
    setResponseData(null);
  };

  return (
    <Styles.Container data-testid="PostCodeSearch">
      <Styles.DropDownButton onClick={() => setOpen(open ? false : true)}>
        <Styles.IconWrapper>
          <ChevronIcon direction={open ? 'down' : 'right'} colourFill={themeContext.theme_vars.colours.black} />
        </Styles.IconWrapper>
        {title}
      </Styles.DropDownButton>
      {open && (
        <Styles.DropDownContent>
          {responseData === null ? (
            <FormWithLine
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              isError={error?.message != null}
              lineColour={themeContext.theme_vars.colours.grey_dark}
            >
              {loading && (
                <Styles.LoadingContainer>
                  <LoadingSpinner />
                  <p>Loading...</p>
                </Styles.LoadingContainer>
              )}

              <Styles.FormContainer isLoading={loading}>
                <Styles.Label htmlFor="postcode">
                  Enter your postcode
                  <HintText
                    text={themeContext.cardinal_name === 'north' ? 'For example NN16 0AP' : 'For example NN1 1DE'}
                  />
                  <Input
                    type="text"
                    placeholder="Enter a postcode"
                    name="postcode"
                    errorText={errorText}
                    isErrored={error?.message != null}
                    maxLength={10}
                  />
                </Styles.Label>

                <FormButton type="submit" aria-label="Submit" text="Find" />
              </Styles.FormContainer>
            </FormWithLine>
          ) : (
            <Styles.PostcodeResult>
              <Styles.Line />
              <div className="result">
                <p>
                  This postcode <strong>{currentPostcode}</strong> is in{' '}
                  <strong>{data.postcode.unitaries[0].name} Northamptonshire</strong>, in the{' '}
                  <strong>{data.postcode.sovereigns[0].name}</strong> area.
                </p>
                {themeContext.theme_vars.cardinal_name !==
                  data.postcode.unitaries[0].name.split(' ')[0].toLowerCase() && (
                  <>
                    <p>
                      In order to find the right information for you, please visit the {data.postcode.unitaries[0].name}{' '}
                      Northamptonshire website and find your local area ({data.postcode.sovereigns[0].name}) for this
                      service.
                    </p>

                    <Button
                      size="large"
                      colourOverride={themeContext.theme_vars.other_council_action}
                      text={'Go to ' + data.postcode.unitaries[0].name + " Northamptonshire's website"}
                      url={otherCouncilLink}
                      isExternal={true}
                    />
                    <br />
                  </>
                )}
                <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
              </div>
            </Styles.PostcodeResult>
          )}
        </Styles.DropDownContent>
      )}
    </Styles.Container>
  );
};

export default PostCodeSearchApollo;
