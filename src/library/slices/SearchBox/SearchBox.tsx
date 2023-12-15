import React from 'react';
import { SearchBoxProps } from './SearchBox.types';
import * as Styles from './SearchBox.styles';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import Image from 'next/image';

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
  customSearch,
  imageSmall,
  imageLarge,
  imageAltText,
  searchBoxLink,
  searchBoxLinkIsPrimary = true,
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
              <Button text={searchBoxLink.title} url={searchBoxLink.url} primary={searchBoxLinkIsPrimary} />
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
          <Styles.Container data-testid="SearchBox" $image={imageLarge}>
            <Image
              src={imageLarge}
              alt={imageAltText}
              fill
              placeholder="blur"
              blurDataURL={imageSmall}
              style={{
                objectFit: 'cover',
              }}
            />
            {searchInner}
          </Styles.Container>
        </>
      ) : (
        <Styles.Container data-testid="SearchBox">{searchInner}</Styles.Container>
      )}
    </>
  );
};

export default SearchBox;
