import React from 'react';
import { LinkBlockProps } from './LinkBlock.types';
import * as Styles from './LinkBlock.styles';
import Heading from '../../components/Heading/Heading';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

const LinkBlock: React.FunctionComponent<LinkBlockProps> = ({ title, links, imageAltText, imageLarge, imageSmall }) => (
  <Styles.Container data-testid="LinkBlock">
    <Heading text={title} level={2} />
    <Row>
      {imageLarge && imageSmall && (
        <Column small="full" medium="one-third" large="one-quarter">
          <ResponsiveImage
            imageAltText={imageAltText}
            imageLarge={imageLarge}
            imageSmall={imageSmall}
            ratio="4by3"
            smallWidth="400"
            largeWidth="800"
          />
        </Column>
      )}

      <Column
        small="full"
        medium={imageLarge && imageSmall ? 'two-thirds' : 'full'}
        large={imageLarge && imageSmall ? 'three-quarters' : 'full'}
      >
        <Row isList>
          {links.map((link, index) => (
            <Column isList key={index} small="full" medium="full" large="full">
              <Styles.LinkContainer>
                <Styles.Link href={link.url}>
                  <span>{link.title}</span>
                  <Styles.BlockLink />
                </Styles.Link>
                {link.summary && <Styles.LinkSummary>{link.summary}</Styles.LinkSummary>}
              </Styles.LinkContainer>
            </Column>
          ))}
        </Row>
      </Column>
    </Row>
  </Styles.Container>
);

export default LinkBlock;
