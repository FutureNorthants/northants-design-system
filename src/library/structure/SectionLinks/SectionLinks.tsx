import React from 'react';
import { SectionLinksProps } from './SectionLinks.types';
import * as Styles from './SectionLinks.styles';
import LazyImage from 'react-lazy-progressive-image';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

/**
 * Display a list of links for a section with optional images
 */
const SectionLinks: React.FunctionComponent<SectionLinksProps> = ({
  sectionTitle,
  displayTitle = true,
  sectionSlug,
  pageLinksArray,
  hasImages = false,
}) => (
  <Styles.Container id={sectionSlug} data-testid="SectionLinks">
    {displayTitle ? <Styles.SectionTitle text={sectionTitle} /> : <br />}
    <Row isList>
      {pageLinksArray.map((link, i) => (
        <Column isList small="full" medium="one-half" large="one-third" key={i}>
          <Styles.Pagelink href={link.url} title={link.title}>
            {hasImages && (
              <>
                {link.imageLarge?.trim() ? (
                  <LazyImage
                    placeholder={link.imageSmall}
                    src={link.imageLarge}
                    visibilitySensorProps={{
                      partialVisibility: true,
                    }}
                  >
                    {(src) => (
                      <Styles.ImageContainer
                        image={src}
                        role="img"
                        aria-label={link.imageAltText}
                      ></Styles.ImageContainer>
                    )}
                  </LazyImage>
                ) : (
                  <Styles.ImageContainer />
                )}
              </>
            )}
            <Styles.Title>{link.title}</Styles.Title>
            <Styles.Summary>{link.summary}</Styles.Summary>
          </Styles.Pagelink>
        </Column>
      ))}
    </Row>
  </Styles.Container>
);

export default SectionLinks;
