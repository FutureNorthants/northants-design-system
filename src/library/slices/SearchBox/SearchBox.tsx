import React, { ReactChild } from 'react';
import { SearchBoxProps } from './SearchBox.types';
import * as Styles from './SearchBox.styles';
import Input from '../../components/Input/Input';
import { uniqueID } from '../../helpers/helpers';
import LazyImage from 'react-lazy-progressive-image';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';

const SearchBox: React.FC<SearchBoxProps> = ({
  fieldName = 'search',
  id = null,
  label,
  labelHidden = true,
  method = 'post',
  path,
  placeholder,
  searchText = 'Search',
  imageSmall,
  imageLarge,
  imageAltText,
  searchBoxLink,
  title,
}) => {
  if (id === null) {
    id = uniqueID();
  }

  const searchInner = (
    <Styles.Inner>
      <Row>
        {title && (
          <Column small="full" medium="full" large="full">
            <Heading text={title} level={2} />
          </Column>
        )}
        <Column small="full" medium="full" large={searchBoxLink ? 'two-thirds' : 'full'}>
          <form method={method} action={path} aria-label={label}>
            <div role="search">
              <Styles.Label htmlFor={id} labelHidden={labelHidden}>
                {label}
              </Styles.Label>
              <Styles.InputWrapper>
                <Input name={fieldName} placeholder={placeholder} id={id} />
                <Styles.SubmitButton type="submit" value={searchText} />
              </Styles.InputWrapper>
            </div>
          </form>
        </Column>
        {searchBoxLink && (
          <Column small="full" medium="full" large="one-third">
            <Styles.LinkContainer labelHidden={labelHidden}>
              <Button text={searchBoxLink.title} url={searchBoxLink.url} />
            </Styles.LinkContainer>
          </Column>
        )}
      </Row>
    </Styles.Inner>
  );

  return (
    <>
      {imageLarge && imageSmall ? (
        <>
          <LazyImage
            src={imageLarge}
            placeholder={imageSmall}
            visibilitySensorProps={{
              partialVisibility: true,
            }}
          >
            {(src) => (
              <Styles.Container image={src} data-testid="SearchBox">
                {searchInner}
              </Styles.Container>
            )}
          </LazyImage>
          {imageAltText && <span role="img" aria-label={imageAltText} />}
        </>
      ) : (
        <Styles.Container data-testid="SearchBox">{searchInner}</Styles.Container>
      )}
    </>
  );
};

export default SearchBox;
