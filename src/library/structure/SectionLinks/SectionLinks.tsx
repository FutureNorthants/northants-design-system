import React from 'react';
import { SectionLinksProps } from './SectionLinks.types';
import * as Styles from './SectionLinks.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import Card from '../../components/Card/Card';

/**
 * Display a list of links for a section with optional images
 */
const SectionLinks: React.FunctionComponent<SectionLinksProps> = ({
  sectionTitle,
  displayTitle = true,
  sectionSlug,
  pageLinksArray,
  hasImages = false,
  hasCards = false,
}) => (
  <Styles.Container id={sectionSlug} data-testid="SectionLinks">
    {displayTitle ? <Styles.SectionTitle text={sectionTitle} /> : <br />}
    <Row isList>
      {pageLinksArray.map((link, i) => (
        <Column isList small="full" medium="one-half" large="one-third" key={i}>
          {hasCards && hasImages ? (
            <Card
              footerLink={link}
              imageAltText={link.imageAltText}
              imageLarge={link.imageLarge}
              imageSmall={link.imageSmall}
              content={link.summary}
            />
          ) : hasCards && !hasImages ? (
            <Card footerLink={link} header={link.title} content={link.summary} />
          ) : (
            <Styles.Pagelink href={link.url} title={link.title}>
              {hasImages && (
                <>
                  {link.imageLarge?.trim() ? (
                    <ResponsiveImage
                      imageSmall={link.imageSmall}
                      imageLarge={link.imageLarge}
                      imageAltText={link.imageAltText}
                      ratio="16by9"
                      smallWidth="400"
                      largeWidth="800"
                      objectFit="cover"
                    />
                  ) : (
                    <Styles.ImageContainer />
                  )}
                </>
              )}
              <Styles.Title>{link.title}</Styles.Title>
              <Styles.Summary>{link.summary}</Styles.Summary>
            </Styles.Pagelink>
          )}
        </Column>
      ))}
    </Row>
  </Styles.Container>
);

export default SectionLinks;
