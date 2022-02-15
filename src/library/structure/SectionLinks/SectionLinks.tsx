import React from 'react';
import { SectionLinksProps } from './SectionLinks.types';
import * as Styles from './SectionLinks.styles';
import LazyImage from 'react-lazy-progressive-image';

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
    <Styles.LinksList>
      {pageLinksArray.map((link, i) => (
        <Styles.Pagelink key={i} href={link.url} title={link.title}>
          {hasImages && (
            <Styles.ImageContainer>
              {link.imageLarge?.trim() && (
                <LazyImage
                  placeholder={link.imageSmall}
                  src={link.imageLarge}
                  visibilitySensorProps={{
                    partialVisibility: true,
                  }}
                >
                  {(src) => <Styles.Image src={src} alt={link.imageAltText} />}
                </LazyImage>
              )}
            </Styles.ImageContainer>
          )}
          <Styles.Title>{link.title}</Styles.Title>
          <Styles.Summary>{link.summary}</Styles.Summary>
        </Styles.Pagelink>
      ))}
      {pageLinksArray.length > 1 && (pageLinksArray.length + 1) % 3 === 0 && <Styles.PagelinkBlank />}
    </Styles.LinksList>
  </Styles.Container>
);

export default SectionLinks;
