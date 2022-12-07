import React from 'react';
import { SearchBoxProps } from './SearchBox.types';
import * as Styles from './SearchBox.styles';
import LazyImage from 'react-lazy-progressive-image';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import CustomSearch from '../../components/CustomSearch/CustomSearch';

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
  customSearch,
  imageSmall,
  imageLarge,
  imageAltText,
  searchBoxLink,
  title,
}) => {
  const searchInner = (
    <Styles.Inner>
      <Row>
        {title && (
          <Column small="full" medium="full" large="full">
            <Heading text={title} level={2} />
          </Column>
        )}
        <Column small="full" medium="full" large={searchBoxLink ? 'two-thirds' : 'full'}>
          <CustomSearch {...customSearch} />
        </Column>
        {searchBoxLink && (
          <Column small="full" medium="full" large="one-third">
            <Styles.LinkContainer>
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
