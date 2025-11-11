import React from 'react';
import { SearchBoxProps } from './SearchBox.types';
import * as Styles from './SearchBox.styles';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

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
              <Button
                text={searchBoxLink.title}
                url={searchBoxLink.url}
                primary={searchBoxLinkIsPrimary}
                size="large"
              />
            </Styles.LinkContainer>
          </Column>
        )}
      </Row>
    </Styles.Inner>
  );

  return (
    <Styles.Container data-testid="SearchBox" $hasImage={imageSmall && imageLarge}>
      {imageSmall && imageLarge && (
        <ResponsiveImage
          imageSmall={imageSmall}
          imageLarge={imageLarge}
          imageAltText={imageAltText}
          smallWidth="400"
          largeWidth="1200"
          ratio="auto"
          objectFit="cover"
        />
      )}
      {searchInner}
    </Styles.Container>
  );
};

export default SearchBox;
