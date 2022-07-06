import React from 'react';
import { ImageAndTextProps } from './ImageAndText.types';
import * as Styles from './ImageAndText.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Image from '../Image/Image';
import Heading from '../../components/Heading/Heading';
import sanitizeHtml from 'sanitize-html';

/**
 * A container for an image and text content, with an optional heading
 */
const ImageAndText: React.FunctionComponent<ImageAndTextProps> = ({ heading, textContent, image }) => (
  <Styles.Container data-testid="ImageAndText">
    <Row>
      {heading && (
        <Column small="full" medium="full" large="full">
          <Styles.HeadingContainer>
            <Heading text={heading} level={3} />
          </Styles.HeadingContainer>
        </Column>
      )}
      {image ? (
        <>
          <Column small="full" medium="one-third" large="one-third">
            <Image {...image} />
          </Column>
          <Column small="full" medium="two-thirds" large="two-thirds">
            <Styles.Content dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }} />
          </Column>
        </>
      ) : (
        <Column small="full" medium="full" large="full">
          <Styles.Content dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }} />
        </Column>
      )}
    </Row>
  </Styles.Container>
);

export default ImageAndText;
